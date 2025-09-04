import User from "../models/User.js"

const userService = {
  getAllUsers: async () => {
    return await User.find();
  },
  getUserByUsername: async (username) => {
    return await User.findOne({ name: username})
  },
  getUserById: async (id) => {
    return await User.findById(id); 
  },
  create: async(name, password,age, phone) => {
    return await User.create({
      name, password ,age, phone
    })
  }
}

export default userService