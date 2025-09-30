// Imports
import { data_accelerator_rates } from "./data/calc-ratios/data_accelerator.js";
import { data_assembly_rates } from "./data/calc-ratios/data_assembly.js";
import { data_blender_rates } from "./data/calc-ratios/data_blender.js";
import { data_construction_rates } from "./data/calc-ratios/data_construction.js";
import { data_converter_rates } from "./data/calc-ratios/data_converter.js";
import { data_foundry_rates } from "./data/calc-ratios/data_foundry.js";
import { data_manufacturing_rates } from "./data/calc-ratios/data_manufacturing.js";
import { data_mining_rates } from "./data/calc-ratios/data_mining.js";
import { data_nuclear_rates } from "./data/calc-ratios/data_nuclear.js";
import { data_fuel_generator_rates } from "./data/calc-ratios/data_fuel-generator.js";
import { data_coal_generator_rates } from "./data/calc-ratios/data_coal-generator.js";
import { data_biomass_generator_rates } from "./data/calc-ratios/data_biomass-burner.js";
import { data_packager_rates } from "./data/calc-ratios/data_packager.js";
import { data_quantum_encoder_rates } from "./data/calc-ratios/data_quantum-encoder.js";
import { data_refining_rates } from "./data/calc-ratios/data_refining.js";
import { data_smelter_rates } from "./data/calc-ratios/data_smelter.js";
import { data_alien_power_augmentor_rates } from "./data/calc-ratios/data_power-augmentor.js";
import { data_common_ratios } from "./data/data_chained-ratios.js";
import { data_links } from "./data/data_links.js";
import { RatioRenderService } from "./services/ratio-render-service.js";
import { UtilService } from "./services/util-service.js";
// Constants
const elRootCalculatedRatios = document.getElementById("CalculatedRatios");
const elRootChainedRatios = document.getElementById("SelectedRatios");
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
    if (!data_accelerator_rates)
        throw new Error("data_accelerator_rates is null");
    if (!data_assembly_rates)
        throw new Error("data_assembly_rates is null");
    if (!data_blender_rates)
        throw new Error("data_blender_rates is null");
    if (!data_construction_rates)
        throw new Error("data_construction_rates is null");
    if (!data_converter_rates)
        throw new Error("data_converter_rates is null");
    if (!data_foundry_rates)
        throw new Error("data_foundry_rates is null");
    if (!data_manufacturing_rates)
        throw new Error("data_manufacturing_rates is null");
    if (!data_mining_rates)
        throw new Error("data_mining_rates is null");
    if (!data_nuclear_rates)
        throw new Error("data_nuclear_rates is null");
    if (!data_fuel_generator_rates)
        throw new Error("data_fuel_generator_rates is null");
    if (!data_coal_generator_rates)
        throw new Error("data_coal_generator_rates is null");
    if (!data_biomass_generator_rates)
        throw new Error("data_biomass_generator_rates is null");
    if (!data_packager_rates)
        throw new Error("data_packager_rates is null");
    if (!data_quantum_encoder_rates)
        throw new Error("data_quantum_encoder_rates is null");
    if (!data_refining_rates)
        throw new Error("data_refining_rates is null");
    if (!data_smelter_rates)
        throw new Error("data_smelter_rates is null");
    if (!data_alien_power_augmentor_rates)
        throw new Error("data_lien_power_augmentor_rates is null");
    // Clear list
    // elRootCalculatedRatios.innerHTML = "";
    Object.assign(rawData, data_accelerator_rates.recipes);
    Object.assign(rawData, data_assembly_rates.recipes);
    Object.assign(rawData, data_blender_rates.recipes);
    Object.assign(rawData, data_construction_rates.recipes);
    Object.assign(rawData, data_converter_rates.recipes);
    Object.assign(rawData, data_foundry_rates.recipes);
    Object.assign(rawData, data_manufacturing_rates.recipes);
    Object.assign(rawData, data_mining_rates.recipes);
    Object.assign(rawData, data_nuclear_rates.recipes);
    Object.assign(rawData, data_coal_generator_rates.recipes);
    Object.assign(rawData, data_biomass_generator_rates.recipes);
    Object.assign(rawData, data_packager_rates.recipes);
    Object.assign(rawData, data_quantum_encoder_rates.recipes);
    Object.assign(rawData, data_refining_rates.recipes);
    Object.assign(rawData, data_smelter_rates.recipes);
    Object.assign(rawData, data_alien_power_augmentor_rates.recipes);
    // console.log(rawData);
    // Generate list
    renderCalculatedRatios([
        { recipes: data_smelter_rates.recipes, name: "Smelter Rates" },
        { recipes: data_foundry_rates.recipes, name: "Foundry Rates" },
        { recipes: data_construction_rates.recipes, name: "Constructor Rates" },
        { recipes: data_assembly_rates.recipes, name: "Assembler Rates" },
        { recipes: data_manufacturing_rates.recipes, name: "Manufacturer Rates" },
        { recipes: data_refining_rates.recipes, name: "Refinery Rates" },
        { recipes: data_packager_rates.recipes, name: "Packager Rates" },
        { recipes: data_blender_rates.recipes, name: "Blender Rates" },
        { recipes: data_accelerator_rates.recipes, name: "Particle Accelerator Rates" },
        { recipes: data_converter_rates.recipes, name: "Converter Rates" },
        { recipes: data_quantum_encoder_rates.recipes, name: "Quantum Encoder Rates" },
        { recipes: data_nuclear_rates.recipes, name: "Nuclear Rates" },
        { recipes: data_fuel_generator_rates.recipes, name: "Fuel Generator Rates" },
        { recipes: data_coal_generator_rates.recipes, name: "Coal Generator Rates" },
        { recipes: data_biomass_generator_rates.recipes, name: "Biomass Generator Rates" },
        { recipes: data_alien_power_augmentor_rates.recipes, name: "Alien Rates" },
    ]);
}
function renderChainedRatios() {
    // renderServiceChainedRatios.render(data_common_ratios["Ratios_Smelting"], "Ore Ratios");
    // renderServiceChainedRatios.render(data_common_ratios["Ratios_Construction"], "Product Ratios");
    renderServiceChainedRatios.render(data_common_ratios["Ratios"]);
}
function renderCalculatedRatios(data) {
    data.forEach((data) => {
        const parsedData = parseData(data.recipes, data.name);
        renderServiceCalculatedRatios.render(parsedData, data.name);
    });
}
function parseData(rawRecipesData, name) {
    // console.log(`____________ Parse ${name} _______________`);
    // console.log(rawRecipesData);
    let data = [];
    // Loop over recipes
    Object.entries(rawRecipesData).forEach(([recipeName, recipeData], i) => {
        let piSet = [];
        let piRatio;
        // console.log(`====== ${recipeName} ======`);
        let multiplier = 1;
        // Only care about the first product to determine machine ratio (make sure to define the main one first)
        const firstProductRate = Object.values(recipeData.out)[0];
        let num = firstProductRate !== undefined ? Number(firstProductRate) : 1;
        while (num * multiplier < 1) {
            multiplier *= 10;
        }
        // Out
        piSet.push({
            name: Object.keys(recipeData.out)[0] ?? "",
            count: 1,
            machine: recipeData.machine,
        });
        const ratesRequired = Object.entries(recipeData.in).map(([k, v]) => v * multiplier);
        const ratesProvided = [];
        // Loop over ingredients
        // console.log({in: recipeData.in, ratesRequired});
        // Ins
        Object.entries(recipeData.in).forEach(([item, itemRequiredRate]) => {
            // console.log(`----- ${item} -----`);
            let itemRecipeName = item;
            let itemRecipe = rawData[itemRecipeName];
            if (!itemRecipe) {
                itemRecipeName = UtilService.getHrName(item);
                itemRecipe = rawData[itemRecipeName];
            }
            // console.log({item, reqItem, rawData});
            if (!itemRecipe) {
                const key = Object.keys(rawData).find((k) => k.includes(item) || k.includes(UtilService.getHrName(item)));
                if (key) {
                    console.warn(`Couldn't find exact item recipe match: ${item} for ${recipeName}, but found: ${key}`);
                    itemRecipeName = key;
                    itemRecipe = rawData[itemRecipeName];
                }
                else {
                    // console.error(`Can't find: ${item} for ${recipeName}`);
                    throw new Error(`Can't find: ${item} for ${recipeName}`);
                }
            }
            let itemProvidedRateFromRecipe = Object.entries(itemRecipe.out).find(([k, v]) => k === item)?.[1];
            if (itemProvidedRateFromRecipe == null) {
                throw new Error(`Can't find item output: ${item} for ${itemRecipeName} recipe`);
            }
            ratesProvided.push(itemProvidedRateFromRecipe * multiplier);
            piSet.push({
                name: item,
                count: 1,
                machine: itemRecipe.machine,
            });
        });
        // console.log("Required rates:");
        // console.log(ratesRequired);
        // console.log("Provided rates:");
        // console.log(ratesProvided);
        let ratioMap = ratesRequired.map((rate, i) => getRatioSimple(rate, ratesProvided[i]));
        // console.log("ratioMap");
        // console.log(ratioMap);
        piRatio = ratioMap[0];
        for (let i = 1; i < ratioMap.length; i++) {
            piRatio = getRatioCompound(piRatio, ratioMap[i]);
        }
        let isNormalized = false;
        if (piRatio && piRatio.length > 0) {
            // Step 1: divide everything by the gcd to simplify (should have been done already?)
            const gcdAll = piRatio.reduce((a, b) => getGcd(a, b));
            piRatio = piRatio.map((v) => v / gcdAll);
            // Step 2: if still too big, normalize to a smaller scale
            // TODO: Have this be a user setting to
            // - skip
            // - use min value
            // - use max value
            // - define the scale (v * scale)
            // - defined threshold
            // - mark wich ones were normalized
            const MAX_REASONABLE_RATIO = 50; // tweak this threshold for your game
            const maxVal = Math.max(...piRatio);
            const minVal = Math.min(...piRatio);
            if (maxVal > MAX_REASONABLE_RATIO) {
                // const scale = maxVal / MAX_REASONABLE_RATIO;
                piRatio = piRatio.map((v) => (v * 1) / minVal);
                // isNormalized = true;
            }
        }
        // console.log('piRatio')
        // console.log(piRatio);
        // Simplify Ratios
        // console.log({piRatio, piSet})
        piSet.forEach((pi, i) => {
            // console.log({pi, i})
            pi.count = piRatio ? piRatio[i] : 1;
        });
        // console.log('piSet');
        // console.log(piSet);
        // Push set
        data.push({
            link: "",
            productionItems: piSet,
            trueRatio: !isNormalized,
        });
        // console.log('\n');
    });
    // console.log(`data`,data);
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
// function getGcdArray(arr: number[]): number {
//   let result: number = arr[0];
//   for (let i: number = 1; i < arr.length; i++) {
//     result = getGcd(arr[i], result);
//     if (result == 1) {
//       return 1;
//     }
//   }
//   return result;
// }
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
