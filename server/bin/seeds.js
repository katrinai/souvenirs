// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const cities = require("../data/cities.json");
const City = require("../models/City");

const bcryptSalt = 10;

require("../configs/database");

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt))
  }
];

User.deleteMany()
  .then(() => {
    return City.deleteMany();
  })
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created:`);
    console.log(usersCreated.map(u => u.username));
  })
  .then(() => {
    return City.create(cities);
  })
  .then(citiessCreated => {
    console.log(`${citiessCreated.length} cities created:`);
    console.log(citiessCreated.map(c => c.name));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
