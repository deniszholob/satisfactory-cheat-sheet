// Imports
import { data_assembly_rates } from "./data/calc-ratios/data_assembly.js";
import { data_construction_rates } from "./data/calc-ratios/data_construction.js";
import { data_manufacturing_rates } from "./data/calc-ratios/data_manufacturing.js";
import { data_mining_rates } from "./data/calc-ratios/data_mining.js";
import { data_refining_rates } from "./data/calc-ratios/data_refining.js";
import { data_smelting_rates } from "./data/calc-ratios/data_smelting.js";
import { data_common_ratios } from "./data/data_chained-ratios.js";
import { RatioRenderService } from "./services/ratio-render-service.js";
import { data_blending_rates } from "./data/calc-ratios/data_blending.js";
import { data_accelerator_rates } from "./data/calc-ratios/data_accelerator.js";
import { data_nuclear_rates } from "./data/calc-ratios/data_nuclear.js";
import { UtilService } from "./services/util-service.js";
import { data_links } from "./data/data_links.js";
// Constants
const elRootCalculatedRatios = document.getElementById("CalculatedRatios");
const elRootChainedRatios = document.getElementById("ChainedRatios");
const elRootLinks = document.getElementById("Links");
const renderServiceCalculatedRatios = new RatioRenderService(elRootCalculatedRatios);
const renderServiceChainedRatios = new RatioRenderService(elRootChainedRatios);
let rawData = {};
function onInit() {
    renderRatioData();
    renderBeltData();
    elRootLinks.innerHTML = "";
    renderLinkData(data_links.mainLinks);
    renderLinkData(data_links.communityLinks);
}
function renderLinkData(data) {
    const elUlLinks = document.createElement("ul");
    data.forEach((elLink) => {
        const elaLink = UtilService.getExternalLinkEl(elLink.url);
        elaLink.innerHTML = elLink.text;
        const elLiLink = document.createElement("li");
        elLiLink.appendChild(elaLink);
        elRootLinks.appendChild(elLiLink);
    });
    elRootLinks.appendChild(elUlLinks);
}
function renderBeltData() { }
function renderRatioData() {
    if (typeof data_common_ratios === "undefined" || data_common_ratios === null) {
        console.error("Error: data is null...");
    }
    else {
        // elRootChainedRatios.innerHTML = "";
        renderChainedRatios();
    }
    if (typeof data_mining_rates === "undefined" ||
        data_mining_rates === null ||
        typeof data_smelting_rates === "undefined" ||
        data_smelting_rates === null ||
        typeof data_refining_rates === "undefined" ||
        data_refining_rates === null ||
        typeof data_construction_rates === "undefined" ||
        data_construction_rates === null ||
        typeof data_assembly_rates === "undefined" ||
        data_assembly_rates === null ||
        typeof data_manufacturing_rates === "undefined" ||
        data_manufacturing_rates === null ||
        typeof data_blending_rates === "undefined" ||
        data_blending_rates === null ||
        typeof data_accelerator_rates === "undefined" ||
        data_accelerator_rates === null ||
        typeof data_nuclear_rates === "undefined" ||
        data_nuclear_rates === null) {
        console.error("Error: data is null...");
    }
    else {
        // Clear list
        // elRootCalculatedRatios.innerHTML = "";
        Object.assign(rawData, data_mining_rates.recipes);
        Object.assign(rawData, data_smelting_rates.recipes);
        Object.assign(rawData, data_refining_rates.recipes);
        Object.assign(rawData, data_construction_rates.recipes);
        Object.assign(rawData, data_assembly_rates.recipes);
        Object.assign(rawData, data_manufacturing_rates.recipes);
        Object.assign(rawData, data_blending_rates.recipes);
        Object.assign(rawData, data_accelerator_rates.recipes);
        Object.assign(rawData, data_nuclear_rates.recipes);
        // console.log(rawData);
        // Generate list
        renderCalculatedRatios();
    }
}
function renderChainedRatios() {
    // renderServiceChainedRatios.render(data_common_ratios["Ratios_Smelting"], "Ore Ratios");
    // renderServiceChainedRatios.render(data_common_ratios["Ratios_Construction"], "Product Ratios");
    renderServiceChainedRatios.render(data_common_ratios["Ratios"]);
}
function renderCalculatedRatios() {
    let data = [];
    data = parseData(data_smelting_rates.recipes, "Smelter Rates");
    renderServiceCalculatedRatios.render(data, "Smelter Rates");
    data = parseData(data_construction_rates.recipes, "Constructor Rates");
    renderServiceCalculatedRatios.render(data, "Constructor Rates");
    data = parseData(data_assembly_rates.recipes, "Assembler Rates");
    renderServiceCalculatedRatios.render(data, "Assembler Rates");
    data = parseData(data_manufacturing_rates.recipes, "Manufacturer Rates");
    renderServiceCalculatedRatios.render(data, "Manufacturer Rates");
    data = parseData(data_refining_rates.recipes, "Refiner Rates");
    renderServiceCalculatedRatios.render(data, "Refiner Rates");
    data = parseData(data_blending_rates.recipes, "Refiner Rates");
    renderServiceCalculatedRatios.render(data, "Blender Rates");
    data = parseData(data_accelerator_rates.recipes, "Particle Accelerator Rates");
    renderServiceCalculatedRatios.render(data, "Particle Accelerator Rates");
    data = parseData(data_nuclear_rates.recipes, "Nuclear Rates");
    renderServiceCalculatedRatios.render(data, "Nuclear Rates");
}
function parseData(rawDataIn, name) {
    // console.log(`____________ Parse ${name} _______________`);
    // console.log(rawDataIn);
    let data = [];
    let piSet = [];
    let piRatio;
    Object.entries(rawDataIn).forEach(([k, v], i) => {
        // console.log(`====== ${k} ======`);
        let multiplier = 1;
        piSet = [];
        let num = Number(Object.values(v.out)[0]);
        while (num * multiplier < 1) {
            multiplier *= 10;
        }
        // Out
        piSet.push({
            name: Object.keys(v.out)[0],
            count: 1,
            machine: v.machine,
        });
        const ratesRequired = Object.entries(v.in).map(([k, v]) => v * multiplier);
        const ratesProvided = [];
        // console.log((v as Product).in);
        // Ins
        Object.entries(v.in).forEach(([item, irr]) => {
            // console.log(`----- ${item} -----`);
            let itemRequiredRate = irr;
            let reqItem = rawData[item] || rawData[UtilService.getHrName(item)];
            // console.log(item, reqItem);
            if (!reqItem) {
                const key = Object.keys(rawData).find((k) => k.includes(item) || k.includes(UtilService.getHrName(item)));
                if (key) {
                    reqItem = rawData[key];
                }
                else {
                    console.error(`Can't find: ${item}`);
                }
            }
            let itemProvidedRate = Object.values(reqItem.out)[0];
            ratesProvided.push(itemProvidedRate * multiplier);
            piSet.push({
                name: item,
                count: 1,
                machine: reqItem.machine,
            });
        });
        // console.log("Req rates:");
        // console.log(ratesRequired);
        // console.log("Prov rates:");
        // console.log(ratesProvided);
        let ratioMap = ratesRequired.map((n, i) => getRatioSimple(n, ratesProvided[i]));
        piRatio = ratioMap[0];
        for (let i = 1; i < ratioMap.length; i++) {
            piRatio = getRatioCompound(piRatio, ratioMap[i]);
        }
        // console.log('piRatio')
        // console.log(piRatio);
        // Simplify Ratios
        piSet.forEach((pi, i) => {
            pi.count = piRatio[i];
        });
        // console.log('piSet');
        // console.log(piSet);
        // Push set
        data.push({
            link: "",
            productionItems: piSet,
        });
        // console.log('\n');
    });
    // console.log(data);
    return data;
}
function getRatioCompound(ratioA, ratioB) {
    // console.log(ratioA);
    // console.log(ratioB);
    const lcm = getLcm([ratioA[0], ratioB[0]]);
    // console.log(`lcm: ${lcm}`);
    const ratio = [lcm];
    for (let i = 1; i < ratioA.length; i++) {
        ratio.push((lcm / ratioA[0]) * ratioA[i]);
    }
    for (let i = 1; i < ratioB.length; i++) {
        ratio.push((lcm / ratioB[0]) * ratioB[i]);
    }
    // return [lcm, ...ratioA.map(n=>lcm/n*ratioB[0])]
    return ratio;
}
function getRatioSimple(needs, provides) {
    // console.log(needs);
    // console.log(provides);
    const lcm = getLcm([needs, provides]);
    // console.log(`lcm: ${lcm}`);
    return [lcm / needs, lcm / provides];
}
/** Ref: https://www.geeksforgeeks.org/gcd-two-array-numbers/ */
function getGcdArray(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = getGcd(arr[i], result);
        if (result == 1) {
            return 1;
        }
    }
    return result;
}
/** Ref: https://www.geeksforgeeks.org/gcd-two-array-numbers/ */
function getGcd(a, b) {
    if (b == 0) {
        return a;
    }
    return b == 0 ? a : getGcd(b, a % b);
}
/** Ref: https://www.geeksforgeeks.org/lcm-of-given-array-elements/ */
function getLcm(arr) {
    // Initialize result
    let ans = arr[0];
    // ans contains LCM of arr[0], ..arr[i]
    // after i'th iteration,
    for (let i = 1; i < arr.length; i++)
        ans = (arr[i] * ans) / getGcd(arr[i], ans);
    return ans;
}
onInit();
