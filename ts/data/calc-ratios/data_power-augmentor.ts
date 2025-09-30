import { Data } from "../data.model";

export const data_alien_power_augmentor_rates: Data = {
  recipes: {
    "Alien Power Augmenter Energy": {
      out: {
        "ENERGY": 1,
      },
      in: {
        "Alien Power Matrix": 5,
      },
      machine: "Alien Power Augmenter",
    },
    "Portal Supply": {
      out: {
      },
      in: {
        "Singularity Cell": 2,
      },
      machine: "Main Portal",
    },
  },
};
