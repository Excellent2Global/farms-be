/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
  // Initial UserProfile data
  userprofile: [{
    username: 'thanos',
    firstName: 'Dione',
    middlename: '',
    lastName: 'Thanos',
    emailAddress: 'thanos@excellent2global.com',
    phoneNumber: '08060686834',
    gender: 'male',
    address: 'cloud server',
    city: 'bauchi',
    state: 'bauchi',
    dateOfBirth: '2018-09-29',
    stateOfOrigin: 'abuja',
    pictureUrl: 'https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg'
  }],

  // Initial User data
  user: [{
    username: 'thanos',
    password: 'b@Da55t!TAu#',
    userRole: 'root',
    permission: 'general',
    userStatus: 'active'
  }]
};
