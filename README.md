# AddressPinas

### What is this for?

This is a simple package for getting a  list of Regions, Provinces, Cities/Muninicapals and Barangays of the Philippines that could be useful for registration forms or other app functionality.

# Installation

    npm i addresspinas --save


# Usage
    import { allData, address } from 'addresspinas'

    or..

    const { allData, address } = require('addresspinas') 

### Fetch all information in an array.

##### Returns an array of info.

    const regions = philData.allRegions

    const provinces = philData.allProvinces

    const cityMunicipal = philData.allCitiesAndMunicipal

    const brgy = philData.allBrgys

#### Fetching specific information

##### Codes needed to pass into the function

    reg_code // use for fetching data connected to a region.
        {
            "name": "REGION VII (CENTRAL VISAYAS)",
            "reg_code": "07"
        }


    prov_code // for fetching data connected to a province.
        {
            "name": "ORIENTAL MINDORO",
            "reg_code": "17",
            "prov_code": "1752"
        }

    mun_code // for fetching data connected to a city or municipal.
        {
            "name": "LILOAN",
            "prov_code": "0864",
            "city_code": "086406"
        },

# API

#### (Make sure that the data you pass into the function is a " string ")

### Get all Region's provinces

    //address.getProvinceOfRegion(reg_code)

    import { address } from 'addresspinas'


    const provinces = address.getProvinceOfRegion("07")

    console.log(provinces)

    //RETURNS

        name: 'REGION VII (CENTRAL VISAYAS)',
        provinces:
            [
                {
                    name: 'BOHOL',
                    reg_code: '07',
                    prov_code: '0712'
                },
                {
                    name: 'CEBU',
                    reg_code: '07',
                    prov_code: '0722'
                }
            ]
    

### Get all Province's cities and municipals


    const { address } = require("./index");

    const cities = address.getCityMunOfProvince("0722")

    console.log(cities)

    //RETURNS
    
        name: 'CEBU',
        cityOrMunicipal:
        [
            {
                name: 'ALCANTARA',
                prov_code: '0722',
                mun_code: '072201'
            },
            {
                name: 'ALCOY',
                prov_code: '0722',
                mun_code: '072202'
            }
        ]
    

### Get all City/Municipal's barangays

    const { address } = require("./index");
   
    const barangay = address.getBarangaysOfCityMun("072201")

    console.log(barangay)

    //RETURNS

        name: 'ALCANTARA',
        barangays:
        [
            {

                name: 'Cabadiangan',
                mun_code: '072201'
            },
            {
                brgyDesc: 'Cabil-isan',
                mun_code: '072201'
            }
        ]
    



## Properties and methods
| Property  | Type  |  Description |
| ------------ | ------------ | ------------ |
| reg_code  | string  | code of a specific region which is used as a search parameter.  |
| prov_code  | string  | code of a specific province which is used as a search parameter.  |
| mun_code  |  string | code of a specific city or municipality which is used as a search parameter.  |
| philData.allRegions  |  Array | List of all regions  |
| philData.allProvinces  |  Array | List of all provinces  |
| philData.allCitiesAndMunicipal  |  Array | List of all cities and municipals  |
| philData.allBrgys  |  Array | List of all barangays  |
| getProvinceOfRegion  |  Function | Get all the provinces of a specific region. *Parameter (reg_code)* |
| getCityMunOfProvince  |  Function |  Get all the cities and municipalities of a specific province. *Parameter (prov_code)*|
| getBarangaysOfCityMun  |  Function |  Function |  Get all the barangays of a specific city of municipality. *Parameter (mun_code)*|


------------





## Credits
[National Statistical Coordination Board](http://www.nscb.gov.ph/ "National Statistical Coordination Board")
[clavearnel](https://github.com/clavearnel/philippines-region-province-citymun-brgy "clavearnel")
[ejcubillas](https://github.com/ejcubillas "ejcubillas")


## License 
[MIT](https://github.com/darklight721/philippines/blob/master/LICENSE "MIT")
