const fs = require("fs");

const region = JSON.parse(
  fs.readFileSync(`${__dirname}/data/region.json`, "utf-8")
);

const province = JSON.parse(
  fs.readFileSync(`${__dirname}/data/province.json`, "utf-8")
);

const cityMun = JSON.parse(
  fs.readFileSync(`${__dirname}/data/city-mun.json`, "utf-8")
);

const brgy = JSON.parse(
  fs.readFileSync(`${__dirname}/data/brgy.json`, "utf-8")
);

module.exports = {
  region,
  province,
  cityMun,
  brgy,
};
