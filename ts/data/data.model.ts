export interface Data {
  recipes: Recipes;
}

export type Recipes = Record<string, RecipeData>;

export interface RecipeData {
  out: ItemRates;
  in: ItemRates;
  machine: DataMachines;
}

export type ItemRates = Record<string, number>;

export type DataMachines =
  | "Particle Accelerator"
  | "assembler"
  | "constructor"
  | "Converter"
  | "foundry"
  | "Manufacturer"
  | "Nuclear Power Plant"
  | "Refiner"
  | "Smelter"
  | "Blender"
  | "Packager"
  | "Quantum Encoder"
  | "Refinery"
  | "smelter"
  | "Biomass Burner"
  | "Coal Generator"
  | "Fuel Generator"
  | "Alien Power Augmenter"
  | "Main Portal";
