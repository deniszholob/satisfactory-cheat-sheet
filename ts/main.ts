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
import { data_packager_rates } from "./data/calc-ratios/data_packager.js";
import { data_quantum_encoder_rates } from "./data/calc-ratios/data_quantum-encoder.js";
import { data_refining_rates } from "./data/calc-ratios/data_refining.js";
import { data_smelter_rates } from "./data/calc-ratios/data_smelter.js";
import { data_common_ratios } from "./data/data_chained-ratios.js";
import { data_links } from "./data/data_links.js";
import { RatioRenderService } from "./services/ratio-render-service.js";
import { UtilService } from "./services/util-service.js";
import { DataLink, DataLinks } from "./type-definitions/DataLinks.js";
import { Product, ProductionItem, ProductionItemSet } from "./type-definitions/index";

// Constants
const elRootCalculatedRatios: HTMLElement = document.getElementById("CalculatedRatios") as HTMLElement;
const elRootChainedRatios: HTMLElement = document.getElementById("ChainedRatios") as HTMLElement;
const elRootLinks: HTMLElement = document.getElementById("Links") as HTMLElement;
const renderServiceCalculatedRatios: RatioRenderService = new RatioRenderService(elRootCalculatedRatios);
const renderServiceChainedRatios: RatioRenderService = new RatioRenderService(elRootChainedRatios);

let rawData: any = {};

function onInit(): void {
  renderRatioData();
  renderBeltData();
  elRootLinks.innerHTML = "";
  renderLinkData((data_links as DataLinks).mainLinks);
  renderLinkData((data_links as DataLinks).communityLinks);
}

function renderLinkData(data: DataLink[]): void {
  const elUlLinks: HTMLUListElement = document.createElement("ul");
  data.forEach((elLink: DataLink): void => {
    const elaLink: HTMLAnchorElement = UtilService.getExternalLinkEl(elLink.url);
    elaLink.innerHTML = elLink.text;
    const elLiLink: HTMLLIElement = document.createElement("li");
    elLiLink.appendChild(elaLink);
    elRootLinks.appendChild(elLiLink);
  });
  elRootLinks.appendChild(elUlLinks);
}

function renderBeltData(): void {}

function renderRatioData(): void {
  if (typeof data_common_ratios === "undefined" || data_common_ratios === null) {
    console.error("Error: data is null...");
  } else {
    // elRootChainedRatios.innerHTML = "";
    renderChainedRatios();
  }
  
  if(!data_accelerator_rates) throw new Error("data_accelerator_rates is null");
  if(!data_assembly_rates) throw new Error("data_assembly_rates is null");
  if(!data_blender_rates) throw new Error("data_blender_rates is null");
  if(!data_construction_rates) throw new Error("data_construction_rates is null");
  if(!data_converter_rates) throw new Error("data_converter_rates is null");
  if(!data_foundry_rates) throw new Error("data_foundry_rates is null");
  if(!data_manufacturing_rates) throw new Error("data_manufacturing_rates is null");
  if(!data_mining_rates) throw new Error("data_mining_rates is null");
  if(!data_nuclear_rates) throw new Error("data_nuclear_rates is null");
  if(!data_packager_rates) throw new Error("data_packager_rates is null");
  if(!data_quantum_encoder_rates) throw new Error("data_quantum_encoder_rates is null");
  if(!data_refining_rates) throw new Error("data_refining_rates is null");
  if(!data_smelter_rates) throw new Error("data_smelter_rates is null");

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
    Object.assign(rawData, data_packager_rates.recipes);
    Object.assign(rawData, data_quantum_encoder_rates.recipes);
    Object.assign(rawData, data_refining_rates.recipes);
    Object.assign(rawData, data_smelter_rates.recipes);
    // console.log(rawData);
    // Generate list
    renderCalculatedRatios();
}

function renderChainedRatios(): void {
  // renderServiceChainedRatios.render(data_common_ratios["Ratios_Smelting"], "Ore Ratios");
  // renderServiceChainedRatios.render(data_common_ratios["Ratios_Construction"], "Product Ratios");
  renderServiceChainedRatios.render(data_common_ratios["Ratios"]);
}

function renderCalculatedRatios(): void {
  let data: ProductionItemSet[] = [];
  data = parseData(data_smelter_rates.recipes, "Smelter Rates");
  renderServiceCalculatedRatios.render(data, "Smelter Rates");
  data = parseData(data_foundry_rates.recipes, "Foundry Rates");
  renderServiceCalculatedRatios.render(data, "Foundry Rates");
  data = parseData(data_construction_rates.recipes, "Constructor Rates");
  renderServiceCalculatedRatios.render(data, "Constructor Rates");
  data = parseData(data_assembly_rates.recipes, "Assembler Rates");
  renderServiceCalculatedRatios.render(data, "Assembler Rates");
  data = parseData(data_manufacturing_rates.recipes, "Manufacturer Rates");
  renderServiceCalculatedRatios.render(data, "Manufacturer Rates");
  data = parseData(data_refining_rates.recipes, "Refiner Rates");
  renderServiceCalculatedRatios.render(data, "Refiner Rates");
  data = parseData(data_packager_rates.recipes, "Packager Rates");
  renderServiceCalculatedRatios.render(data, "Packager Rates");
  data = parseData(data_blender_rates.recipes, "Blender Rates");
  renderServiceCalculatedRatios.render(data, "Blender Rates");
  data = parseData(data_accelerator_rates.recipes, "Particle Accelerator Rates");
  renderServiceCalculatedRatios.render(data, "Particle Accelerator Rates");
  data = parseData(data_converter_rates.recipes, "Converter Rates");
  renderServiceCalculatedRatios.render(data, "Converter Rates");
  data = parseData(data_quantum_encoder_rates.recipes, "Quantum Encoder Rates");
  renderServiceCalculatedRatios.render(data, "Quantum Encoder Rates");
  data = parseData(data_nuclear_rates.recipes, "Nuclear Rates");
  renderServiceCalculatedRatios.render(data, "Nuclear Rates");
}

function parseData(rawDataIn: any, name: string): ProductionItemSet[] {
  // console.log(`____________ Parse ${name} _______________`);
  // console.log(rawDataIn);
  let data: ProductionItemSet[] = [];
  let piSet: ProductionItem[] = [];
  let piRatio: number[];

  Object.entries(rawDataIn).forEach(([k, v]: [string, unknown], i: number): void => {
    const recipe: string = k;
    const product: Product = v as Product
    // console.log(`====== ${k} ======`);
    let multiplier: number = 1;
    piSet = [];

    let num: number = Number(Object.values((product as Product).out)[0]);
    while (num * multiplier < 1) {
      multiplier *= 10;
    }

    // Out
    piSet.push({
      name: Object.keys((product as Product).out)[0],
      count: 1,
      machine: (product as Product).machine,
    });

    const ratesRequired: number[] = Object.entries((product as Product).in).map(
      ([k, v]: [string, unknown]): number => (v as number) * multiplier
    );
    const ratesProvided: number[] = [];

    // console.log((v as Product).in);
    // Ins
    Object.entries((product as Product).in).forEach(([item, irr]: [string, unknown]): void => {
      // console.log(`----- ${item} -----`);
      let itemRequiredRate: number = irr as number;
      let reqItem: Product = rawData[item] || rawData[UtilService.getHrName(item)];
      // console.log(item, reqItem);
      if (!reqItem) {
        const key: string | undefined = Object.keys(rawData).find(
          (k: string): boolean => k.includes(item) || k.includes(UtilService.getHrName(item))
        );
        if (key) {
          reqItem = rawData[key];
        } else {
          console.error(`Can't find: ${item} for ${recipe}`);
        }
      }

      let itemProvidedRate: number = Object.values(reqItem.out)[0] as number;
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

    let ratioMap: number[][] = ratesRequired.map((n: number, i: number): number[] =>
      getRatioSimple(n, ratesProvided[i])
    );
    // console.log("ratioMap");
    // console.log(ratioMap);
    piRatio = ratioMap[0];

    for (let i: number = 1; i < ratioMap.length; i++) {
      piRatio = getRatioCompound(piRatio, ratioMap[i]);
    }
    // console.log('piRatio')
    // console.log(piRatio);

    // Simplify Ratios
    // console.log({piRatio, piSet})
    piSet.forEach((pi: ProductionItem, i: number): void => {
      // console.log({pi, i})
      pi.count = piRatio ? piRatio[i] : 1;
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
  // console.log(`data`,data);
  return data;
}

function getRatioCompound(ratioA: number[], ratioB: number[]): number[] {
  // console.log(ratioA);
  // console.log(ratioB);
  const lcm: number = getLcm([ratioA[0], ratioB[0]]);
  // console.log(`lcm: ${lcm}`);
  const ratio: number[] = [lcm];
  for (let i: number = 1; i < ratioA.length; i++) {
    ratio.push((lcm / ratioA[0]) * ratioA[i]);
  }
  for (let i: number = 1; i < ratioB.length; i++) {
    ratio.push((lcm / ratioB[0]) * ratioB[i]);
  }
  // return [lcm, ...ratioA.map(n=>lcm/n*ratioB[0])]
  return ratio;
}

function getRatioSimple(needs: number, provides: number): number[] {
  // console.log(needs);
  // console.log(provides);
  const lcm: number = getLcm([needs, provides]);
  // console.log(`lcm: ${lcm}`);
  return [lcm / needs, lcm / provides];
}

/** Ref: https://www.geeksforgeeks.org/gcd-two-array-numbers/ */
function getGcdArray(arr: number[]): number {
  let result: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    result = getGcd(arr[i], result);
    if (result == 1) {
      return 1;
    }
  }
  return result;
}

/** Ref: https://www.geeksforgeeks.org/gcd-two-array-numbers/ */
function getGcd(a: number, b: number): number {
  if (b == 0) {
    return a;
  }
  return b == 0 ? a : getGcd(b, a % b);
}

/** Ref: https://www.geeksforgeeks.org/lcm-of-given-array-elements/ */
function getLcm(arr: number[]): number {
  // Initialize result
  let ans: number = arr[0];

  // ans contains LCM of arr[0], ..arr[i]
  // after i'th iteration,
  for (let i: number = 1; i < arr.length; i++) ans = (arr[i] * ans) / getGcd(arr[i], ans);

  return ans;
}

onInit();
