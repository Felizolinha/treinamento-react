const User = require("../models/UserSchema.js");

module.exports = {
  async login(req, res) {
    const { username, password } = req.body;
    const userAuthenticated = await User.findOne({
      $and: [{ username: username }, { password: password }]
    });

    if (userAuthenticated) {
      return res.status(200).json({ userId: userAuthenticated._id });
    }

    res.sendStatus(401);
  },

  async signup(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.create({ username, password });

      res.status(201).json({
        userId: user._id
      });
    } catch (err) {
      res.sendStatus(401);
    }
  },

  async updatePassword(req, res) {
    const { username, oldPassword, newPassword } = req.body;

    const userAuthenticated = await User.findOne({
      $and: [{ username: username }, { password: oldPassword }]
    });

    if (userAuthenticated) {
      userAuthenticated.password = newPassword;
      try {
        await userAuthenticated.save();
        return res.sendStatus(204);
      } catch (err) {
        return res.sendStatus(500);
      }
    }

    //Failed to Authenticate
    res.sendStatus(401);
  },

  async deleteUser(req, res) {
    const { username, password } = req.query;
    const deletedUser = await User.deleteOne({
      $and: [{ username }, { password }]
    });

    if (deletedUser.ok) {
      if (deletedUser.deletedCount > 0) {
        return res.sendStatus(204);
      } else {
        //Failed to Authenticate or User didn't exist
        return res.sendStatus(401);
      }
    }

    res.sendStatus(500);
  }
};
