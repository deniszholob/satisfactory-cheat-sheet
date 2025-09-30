import { Data } from "../data.model";

export const data_coal_generator_rates: Data = {
  recipes: {
    "Coal Energy": {
      out: {
        "ENERGY": 75,
      },
      in: {
        "Coal": 15,
        "Water": 45,
      },
      machine: "Coal Generator",
    },
    "Compacted Coal Energy": {
      out: {
        "ENERGY": 75,
      },
      in: {
        "Compacted Coal": 7.14,
        "Water": 45,
      },
      machine: "Coal Generator",
    },
    "Petroleum Coke Energy": {
      out: {
        "ENERGY": 75,
      },
      in: {
        "Petroleum Coke": 25,
        "Water": 45,
      },
      machine: "Coal Generator",
    },
  },
};
