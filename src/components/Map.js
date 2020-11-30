import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import covidRates from '../data/oregon_covid_rates';
import incomeRates from '../data/oregon_income_rates';
import { colors, labels } from '../constants/colors';
import { flatten, get } from "lodash";
import { mean, std } from "mathjs";

const GEO_JSON_FILE_NAME = "oregon_zipcode_polygons_geo.min.json";
const ZIP_CODE = "ZCTA5CE10";

let geoJsonZipCodes = require(`../data/${GEO_JSON_FILE_NAME}`);

const Map = () => {
    const [incomeMean, setIncomeMean] = useState(0);
    const [incomeStd, setIncomeStd] = useState(0);
    const [covidMean, setCovidMean] = useState(0);
    const [covidStd, setCovidStd] = useState(0);

    const gatherData = async () => {
        const covidRatesArray = Object.values(covidRates);
        const incomes = Object
            .values(incomeRates)
            .filter(zip => zip.householdMedian !== "N/A")
            .map(zip => get(zip, "householdMedian"));

        setIncomeStd(std(incomes) / 2);
        setIncomeMean(mean(incomes));

        setCovidStd(std(covidRatesArray) / 10);
        setCovidMean(mean(covidRatesArray));

        console.log("mean incomes = ", mean(incomes));
        console.log("std incomes = ", std(incomes) / 2);

        console.log("mean covid = ", mean(covidRatesArray));
        console.log("std covid = ", std(covidRatesArray) / 10);
    }

    const style = feature => ({
        "color": "#ff7800",
        fillColor: getColor(feature),
        "weight": 1,
        "opacity": 1,
        fillOpacity: 10
    });

    const getColor = feature => {
        const zipCode = get(feature, `properties.${ZIP_CODE}`);
        const data = getData(zipCode);
        const covid = parseFloat(get(data, "covid", 0));
        const income = parseFloat(get(data, "income", 0));
        const lower = covidMean - covidStd;

        // console.log("covid - lower = ", covid < lower);
        // // console.log("data = ", getData(zipCode));
        // console.log("Thresholds:");
        // console.log("Value = ", covid);
        // console.log("Lower = ", covidMean - covidStd);
        // console.log("Upper = ", covidMean + covidStd);
        let covidIndex, incomeIndex;
        if (covid < covidMean - covidStd) {
            covidIndex = 0;
        }
        else if (covid > covidMean + covidStd) {
            covidIndex = 2;
        }
        else {
            covidIndex = 1;
        }
        if (income < incomeMean - incomeStd) {
            incomeIndex = 0;
        }
        else if (income > incomeMean + incomeStd) {
            incomeIndex = 2;
        }
        else {
            incomeIndex = 1;
        }
        console.log("data: ", data);
        // console.log("color = ", colors[covidIndex][incomeIndex]);
        console.log("indices: covid = ", covid, "; covidIndex = ", covidIndex);
        console.log("indices: income = ", income, "; incomeIndex = ", incomeIndex);
        return colors[covidIndex][incomeIndex];
    }

    const getData = zipCode => {
        console.log("zipCode = ", zipCode);
        return {
            covid: get(covidRates, zipCode, "N/A"),
            income: get(incomeRates, `${zipCode}.householdMedian`, "N/A")
        }
    };

    const onEachFeature = ({ properties }, layer) => {
        const zipCode = properties[ZIP_CODE];
        const { covid, income } = getData(zipCode);

        if (properties && properties[ZIP_CODE]) {
            layer.bindPopup(`${zipCode}<br/>covid per 100k: ${covid}<br/>household income: ${income}`);
        }
    }

    useEffect(() => {
        gatherData();
        console.log(geoJsonZipCodes);
        if (covidMean > 0) {
            const myMap = L.map("mapid").setView([44.09, -121.92], 7);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>', opacity: 0.1 }).addTo(myMap);
            L.geoJSON(geoJsonZipCodes, {
                style,
                onEachFeature
            }).addTo(myMap);
            const legend = L.control({ position: 'bottomright' });

            legend.onAdd = () => {
                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [0, 10, 20, 50, 100, 200, 500, 1000];

                const flatColors = flatten(colors);
                const flatLabels = flatten(labels);
                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < flatColors.length; i++) {
                    div.innerHTML +=
                        `<i style="background:${flatColors[i]}"></i>${flatLabels[i]}<br />` 
                }
                return div;
            }
            legend.addTo(myMap);
        }
    }, [covidMean]);

    return <div id="mapid"></div>
}

export default Map;