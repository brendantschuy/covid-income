import React, { useEffect } from 'react';
import L from 'leaflet';
import covidRates from '../data/oregon_covid_rates';
import incomeRates from '../data/oregon_income_rates';
import { get } from "lodash";

const GEO_JSON_FILE_NAME = "oregon_zipcode_polygons_geo.min.json";
const ZIP_CODE = "ZCTA5CE10";

let geoJsonZipCodes = require(`../data/${GEO_JSON_FILE_NAME}`);

const Map = () => {
    const style = {
        "color": "#ff7800",
        "weight": 1,
        "opacity": 0.40
    };

    const onEachFeature = ({properties}, layer) => {
        const zipCode = properties[ZIP_CODE];
        const covid = get(covidRates, zipCode, "N/A");
        const income = get(incomeRates, `${zipCode}.householdMedian`, "N/A");

        if(properties && properties[ZIP_CODE]) {
            layer.bindPopup(`${zipCode}<br/>covid per 100k: ${covid}<br/>household income: ${income}`);
        }
    }

    useEffect(() => {
        console.log(geoJsonZipCodes);
        const myMap = L.map("mapid").setView([44.09, -121.92], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(myMap);
        L.geoJSON(geoJsonZipCodes, {
            style,
            onEachFeature
        }).addTo(myMap);
    }, []);

    return <div id="mapid"></div>
}

export default Map;