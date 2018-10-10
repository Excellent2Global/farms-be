/**
 * StaffController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * Create a new staff
   */
  addStaff: async (req, res) => {
    sails.log.info('POST /staff');
    let staffDetails = req.body;

    var newStaffRecord = await Staff.create(
        Object.assign({
          username: staffDetails.username,
          firstName: staffDetails.firstName,
          middlename: staffDetails.middlename,
          lastName: staffDetails.lastName,
          emailAddress: staffDetails.emailAddress,
          phoneNumber: staffDetails.phoneNumber,
          gender: staffDetails.gender,
          address: staffDetails.address,
          city: staffDetails.city,
          state: staffDetails.state,
          dateOfBirth: staffDetails.dateOfBirth,
          stateOfOrigin: staffDetails.stateOfOrigin,
          pictureUrl: staffDetails.pictureUrl
        })
      )
      .intercept((err) => {
        return res.json({
          err
        });
      })
      .fetch();

    var newUser = await User.create(
        Object.assign({
          username: staffDetails.username,
          password: 'Password1#',
          userRole: staffDetails.staffType,
          permission: staffDetails.deparment,
          userStatus: 'active'
        })
      )
      .intercept((err) => {
        return res.json({
          err
        });
      })
      .fetch();

    return res.ok({
      code: 201,
      message: 'New staff added successfully'
    });
  },

  /**
   * Fetch all staff in the system
   */
  fetchStaff: async (req, res) => {
    sails.log.info('/GET /staff');
    var payload = [];
    var allStaff = await Staff.find()
      .intercept((err) => {
        return res.json({
          err
        });
      });

    allStaff.forEach(element => {
      var items = {
        id: element.id,
        username: element.username,
        firstName: element.firstName,
        middlename: element.middlename,
        lastName: element.lastName,
        emailAddress: element.emailAddress,
        phoneNumber: element.phoneNumber,
        gender: element.gender,
        address: element.address,
        city: element.city,
        state: element.state,
        dateOfBirth: element.dateOfBirth,
        stateOfOrigin: element.stateOfOrigin,
        pictureUrl: element.pictureUrl
      };
      payload.push(items);
    });

    res.ok({
      code: 200,
      message: 'Staff record fetched successfully',
      staff: payload
    });
  },

  /**
   * Get details of one staff
   */
  getStaffByUsername: async (req, res) => {
    sails.log.info('/GET /staff/:username');
    var staffUsername = req.param('username');
    var staffDetails = await Staff.findOne({
        username: staffUsername
      })
      .intercept((err) => {
        return res.json({
          err
        });
      });

    var payload = {
      id: staffDetails.id,
      username: staffDetails.username,
      firstName: staffDetails.firstName,
      middlename: staffDetails.middlename,
      lastName: staffDetails.lastName,
      emailAddress: staffDetails.emailAddress,
      phoneNumber: staffDetails.phoneNumber,
      gender: staffDetails.gender,
      address: staffDetails.address,
      city: staffDetails.city,
      state: staffDetails.state,
      dateOfBirth: staffDetails.dateOfBirth,
      stateOfOrigin: staffDetails.stateOfOrigin,
      pictureUrl: staffDetails.pictureUrl
    };

    res.ok({
      code: 200,
      message: 'Staff details gotten successfully',
      staff: payload
    });
  },

  /**
   * Update staff details
   */
  updateStaff: async (req, res) => {
    sails.log.info('PUT /staff');
    var staffUsername = req.param('username');
    var updatedStaffRecord = await Staff.update({
        username: staffUsername
      })
      .set({
        firstName: staffDetails.firstName,
        middlename: staffDetails.middlename,
        lastName: staffDetails.lastName,
        emailAddress: staffDetails.emailAddress,
        phoneNumber: staffDetails.phoneNumber,
        gender: staffDetails.gender,
        address: staffDetails.address,
        city: staffDetails.city,
        state: staffDetails.state,
        dateOfBirth: staffDetails.dateOfBirth,
        stateOfOrigin: staffDetails.stateOfOrigin,
        pictureUrl: staffDetails.pictureUrl
      })
      .intercept((err) => {
        return res.json({
          err
        });
      })
      .fetch();

    var payload = {
      id: updatedStaffRecord.id,
      username: updatedStaffRecord.username,
      firstName: updatedStaffRecord.firstName,
      middlename: updatedStaffRecord.middlename,
      lastName: updatedStaffRecord.lastName,
      emailAddress: updatedStaffRecord.emailAddress,
      phoneNumber: updatedStaffRecord.phoneNumber,
      gender: updatedStaffRecord.gender,
      address: updatedStaffRecord.address,
      city: updatedStaffRecord.city,
      state: updatedStaffRecord.state,
      dateOfBirth: updatedStaffRecord.dateOfBirth,
      stateOfOrigin: updatedStaffRecord.stateOfOrigin,
      pictureUrl: updatedStaffRecord.pictureUrl
    };

    res.ok({
      code: 200,
      message: 'Staff details updated successfully',
      staff: payload
    });
  }

};
