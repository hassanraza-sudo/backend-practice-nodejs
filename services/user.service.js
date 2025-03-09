const userModel = require("../models/user.model");

const insertUser = async (userData) => {
  try {
    const existingUser = await userModel.find({ email: userData.email });
    console.log(existingUser);
    if (existingUser.length > 0) {
      throw new Error("user already exists");
    }
    const newuser = await userModel.create(userData);
    return newuser;
  } catch (error) {
    throw new Error(error);
  }
};

const getUsers = async () => {
  try {
    const users = await userModel.find();
    if (!users) {
      throw new Error("no users found");
    }
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  insertUser,
  getUsers,
};
