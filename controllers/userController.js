const { User } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
        const dbUserData = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {
                $set: req.body,
            },
            {
                runValidators: true,
                new: true,
            }
        );

        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async deleteUser(req, res) {
    try {
        const dbUserData = await User.findOneAndDelete({_id: req.params.userId})
        res.json({message: 'User deleted'});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},
async addFriend(req, res) {
  try {
      const dbUserData = await User.findOneAndUpdate({
          _id: req.params.userId
      }, {
          $push: {
              friends: req.params.friendId
          }
      })
      res.json(dbUserData)
  } catch(err) {
      console.log(err)
      res.status(500).json(err)
  }
},

async removeFriend(req, res) {
  try {
      const dbUserData = await User.findOneAndUpdate({
          _id: req.params.userId
      }, {
          $pull: {
              friends: req.params.friendId
          }
      })
      res.json(dbUserData)
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
},
};