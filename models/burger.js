var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, value, cb) {
    orm.insertOne("burgers", cols, value, function (res) {
      cb(res);
    });
  },
  updateOne: function (colVals, condition, cb) {
    orm.updateOne("burgers", colVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
