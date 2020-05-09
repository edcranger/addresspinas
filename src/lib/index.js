const region = require("../data/regions.json");
const province = require("../data/provinces.json");
const cityMun = require("../data/city-mun.json");
const brgy = require("../data/barangays.json");

let philData = {
  allRegions: { name: "All Regions", regions: region },
  allProvinces: {
    name: "All Provinces",
    provinces: province,
  },
  allCitiesAndMunicipal: {
    name: "All Municipal",
    citiesAndMunicipals: cityMun,
  },
  allBrgys: {
    name: "All Barangays",
    barangays: brgy,
  },
};

const { allRegions, allProvinces, allCitiesAndMunicipal, allBrgys } = philData;

class Address {
  filters(philData, philData2, params, type) {
    const queryType = {
      region: ["provinces", (i) => i.reg_code === params],
      province: ["cityAndMun", (i) => i.prov_code === params],
      cityMun: ["barangays", (i) => i.mun_code === params],
    };

    return {
      name: philData.find(queryType[type][1]),
      [queryType[type][0]]: philData2.filter(queryType[type][1]),
    };
  }

   getProvinceOfRegion(reg_code) {
    return  this.filters(
      allRegions.regions,
      allProvinces.provinces,
      reg_code,
      "region"
    )
  }

   getCityMunOfProvince(prov_code) {
    return this.filters(
      allProvinces.provinces,
      allCitiesAndMunicipal.citiesAndMunicipals,
      prov_code,
      "province"
    )
  }

   getBarangaysOfCityMun(ctyMun_code) {
    return  this.filters(
      allCitiesAndMunicipal.citiesAndMunicipals,
      allBrgys.barangays,
      ctyMun_code,
      "cityMun"
    );
  }
}

const address = new Address();

module.exports = {
  philData,
  address,
};
