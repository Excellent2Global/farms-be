/**
 * FarmController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addFarm: async (req, res) => {
    sails.log.info('POST /farm');
    let farmDetails = req.body;

    var newFarmDetails = await Farm.create(
      Object.assign({
        shortName: farmDetails.shortName,
        address: farmDetails.address,
        city: farmDetails.city,
        state: farmDetails.state
      })
    )
    .intercept((error) => {
      return res.json({
        error
      });
    })
    .fetch();

    return res.ok({
      code: 201,
      message: 'New farm added successfully'
    });
  },

  fetchFarms: async (req, res) => {
    sails.log.info('GET /farm');
    var payload = await Farm.find()
      .populate('halls')
      .populate('ponds')
      .intercept((err) => {
        return res.json({
          err
        });
      });

    res.ok({
      code: 200,
      message: 'Staff record fetched successfully',
      farms: payload
    });
  },

  getFarmById: (req, res) => {},

  updateFarm: (req, res) => {},

  addHall: (req, res) => {},

  updateHall: (req, res) => {},

  addPond: (req, res) => {},

  updatePond: (req, res) => {},

};

