/**
 * Passport configuration file where you should configure strategies
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var EXPIRES_IN = 60 * 24;
var EXTRACTJWT = ExtractJwt.fromAuthHeaderWithScheme('jwt');
var SECRET = process.env.tokenSecret || '4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM';
var ALGORITHM = 'HS256';
var ISSUER = 'excellent-farms-be.herokuapp.com';
var AUDIENCE = 'excellent-farms-be.herokuapp.com';

/**
 * Configuration object for local strategy
 */
var LOCAL_STRATEGY_CONFIG = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: false
};

/**
 * Configuration object for JWT strategy
 */
var JWT_STRATEGY_CONFIG = {
  jwtFromRequest: EXTRACTJWT,
  secretOrKey: SECRET,
  issuer: ISSUER,
  audience: AUDIENCE,
  passReqToCallback: false
};

/**
 * Triggers when user authenticates via local strategy
 */
function _onLocalStrategyAuth(username, password, next) {
  let query = {
    username: username
  };
  User.findOne(query)
    .exec((error, user) => {
      if (error) {
        return next(error, false, {});
      }

      if (!user) {
        return next(null, false, {
          code: 'E_USER_NOT_FOUND',
          message: username + ' is not found'
        });
      }

      // TODO: replace with new cipher service type
      if (!CipherService.comparePassword(password, user)) {
        return next(null, false, {
          code: 'E_WRONG_PASSWORD',
          message: 'Password is wrong'
        });
      }

      return next(null, user, {});
    });
}

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onJwtStrategyAuth(payload, next) {
  var user = payload.user;
  return next(null, user, {});
}

passport.use(
  new LocalStrategy(LOCAL_STRATEGY_CONFIG, _onLocalStrategyAuth));
passport.use(
  new JwtStrategy(JWT_STRATEGY_CONFIG, _onJwtStrategyAuth));

module.exports.jwtSettings = {
  expiresIn: EXPIRES_IN,
  secret: SECRET,
  algorithm: ALGORITHM,
  issuer: ISSUER,
  audience: AUDIENCE
};
