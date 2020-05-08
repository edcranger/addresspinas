const { region, province, cityMun, brgy } = require("./dataReader");

let philData = {
  allRegions: { name: "All Regions", regions: region.RECORDS },
  allProvinces: {
    name: "All Provinces",
    provinces: province.RECORDS,
  },
  allCitiesAndMunicipal: {
    name: "All Municipal",
    citiesAndMunicipals: cityMun.RECORDS,
  },
  allBrgys: {
    name: "All Barangays",
    barangays: brgy.data,
  },
};

const { allRegions, allProvinces, allCitiesAndMunicipal, allBrgys } = philData;

class Address {
  filters(philData, philData2, params, type) {
    const queryType = {
      region: ["provinces", (i) => i.regCode === params],
      province: ["cityAndMun", (i) => i.provCode === params],
      cityMun: ["barangays", (i) => i.citymunCode === params],
    };

    const name = philData.find(queryType[type][1]),
      datas = philData2.filter(queryType[type][1]);

    return {
      name: name,
      [queryType[type][0]]: datas,
    };
  }

  async getRegionProvince(reg_code) {
    const regionProv = await this.filters(
      allRegions.regions,
      allProvinces.provinces,
      reg_code,
      "region"
    );

    return regionProv;
  }

  async getCityMunOfProvince(prov_code) {
    const cityMun = await this.filters(
      allProvinces.provinces,
      allCitiesAndMunicipal.citiesAndMunicipals,
      prov_code,
      "province"
    );

    return cityMun;
  }

  async getCityMunBrgy(ctyMun_code) {
    const brgy = await this.filters(
      allCitiesAndMunicipal.citiesAndMunicipals,
      allBrgys.barangays,
      ctyMun_code,
      "cityMun"
    );

    return brgy;
  }
}

const address = new Address();

module.exports = {
  philData,
  address,
};
