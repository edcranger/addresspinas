# AddressPinas

### What is this for?

This is a simple package for getting a complete list of Regions, Provinces, Cities/Muninicapals and Barangays of the Philippines that could be useful for registration forms or other app functionality.

# Installation

    npm i addresspinas --save

then...

    import { allData, address } from 'addresspinas'

### Fetch all information in an array.

##### It may cause some latency due to the size of the json data.

    const regions = philData.allRegions

    const provinces = philData.allProvinces

    const cityMunicipal = philData.allCitiesAndMunicipal

    const brgy = philData.allBrgys

#### Fetching specific information

##### Codes needed to pass into the function

    regCode // use for fetching data connected to a region.
        {
            "id": 8,
            "psgcCode": "070000000",
            "regDesc": "REGION VII (CENTRAL VISAYAS)",
            "regCode": "07"
        }


    provCode // for fetching data connected to a province.
        {
            "id": 24,
            "psgcCode": "175200000",
            "provDesc": "ORIENTAL MINDORO",
            "regCode": "17",
            "provCode": "1752"
        }

    citymunCode // for fetching data connected to a city or municipal.
        {
            "id": 1064,
            "psgcCode": "086406000",
            "citymunDesc": "LILOAN",
            "regCode": "08",
            "provCode": "0864",
            "citymunCode": "086406"
        },

# Usage

#### (Make sure that the data you pass into the function is a " string ")

### Get all Region's provinces

    //address.getRegionProvince(regCode)

    import { address } from 'addresspinas'

    (function (){
        console.log(address.getRegionProvince("07"))
    }) ();

    {
    name: 'REGION VII (CENTRAL VISAYAS)',
    provinces:
        [
            {
                id: 39,
                psgcCode: '071200000',
                provDesc: 'BOHOL',
                regCode: '07',
                provCode: '0712'
            },
            {
                id: 40,
                psgcCode: '072200000',
                provDesc: 'CEBU',
                regCode: '07',
                provCode: '0722'
            },
            {
                id: 41,
                psgcCode: '074600000',
                provDesc: 'NEGROS ORIENTAL',
                regCode: '07',
                provCode: '0746'
            },
            {
                id: 42,
                psgcCode: '076100000',
                provDesc: 'SIQUIJOR',
                regCode: '07',
                provCode: '0761'
            }
        ]
    }

### Get all Province's cities and municipals

    // address.getCityMunOfProvince(provCode)

    const { address } = require("./index");

    (function (){
        console.log(address.getCityMunOfProvince("0722"))
    })();

    {
        name: 'CEBU',
        cityOrMunicipal:
        [
            {
                id: 859,
                psgcCode: '072201000',
                citymunDesc: 'ALCANTARA',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072201'
            },
            {
                id: 860,
                psgcCode: '072202000',
                citymunDesc: 'ALCOY',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072202'
            },
            {
                id: 861,
                psgcCode: '072203000',
                citymunDesc: 'ALEGRIA',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072203'
            }
        ]
    }

### Get all City/Municipal's barangays

    //address.getCityMunBrgy(citymunCode)

    const { address } = require("./index");

    (function () {
        console.log(address.getCityMunBrgy("072201"));
    })();



    {
        name: 'ALCANTARA',
        barangays:
        [
            {
                id: 22780,
                brgyCode: '072201001',
                brgyDesc: 'Cabadiangan',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072201'
            },
            {
                id: 22781,
                brgyCode: '072201002',
                brgyDesc: 'Cabil-isan',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072201'
            },
            {
                id: 22782,
                brgyCode: '072201003',
                brgyDesc: 'Candabong',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072201'
            },
            {
                id: 22783,
                brgyCode: '072201004',
                brgyDesc: 'Lawaan',
                regCode: '07',
                provCode: '0722',
                citymunCode: '072201'
            },
        ]
    }
