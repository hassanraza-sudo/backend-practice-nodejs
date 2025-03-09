const services = require("../services/user.service");

const insert = async (req, res) => {
  try {
    const userData = req.body;
    const response = await services.insertUser(userData);
    res.json({ success: true, message: "user created", user: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getusers = async (req, res) => {
  try {
    const response = await services.getUsers();
    res.json({ success: true, users: response });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  insert,
  getusers,
};
