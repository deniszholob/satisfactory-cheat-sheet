import { Data } from "../data.model";

export const data_packager_rates: Data = {
  recipes: {
    "Packaged Liquid Biofuel": {
      out: {
        "Packaged Liquid Biofuel": 40,
      },
      in: {
        "Liquid Biofuel": 40,
        "Empty Canister": 40,
      },
      machine: "Packager",
    },
    "Packaged Fuel": {
      out: {
        "Packaged Fuel": 40,
      },
      in: {
        Fuel: 40,
        "Empty Canister": 40,
      },
      machine: "Packager",
    },
    "Packaged Turbofuel": {
      out: {
        "Packaged Turbofuel": 20,
      },
      in: {
        "Turbofuel": 20,
        "Empty Canister": 20,
      },
      machine: "Packager",
    },
    "Packaged Rocket Fuel": {
      out: {
        "Packaged Turbofuel": 60,
      },
      in: {
        "Rocket Fuel": 120,
        "Empty Fluid Tank": 60,
      },
      machine: "Packager",
    },
    "Packaged Ionized Fuel": {
      out: {
        "Packaged Ionized Fuel": 40,
      },
      in: {
        "Ionized Fuel": 80,
        "Empty Fluid Tank": 40,
      },
      machine: "Packager",
    },
  },
};
