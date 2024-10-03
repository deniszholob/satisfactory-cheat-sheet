export const data_packager_rates: any = {
  recipes: {
    "Packaged Fuel": {
      out: {
        "Packaged Fuel": 40,
      },
      in: {
        Fuel: 40,
        "Empty Canister": 40,
      },
      machine: "Blender",
    },
    "Packaged Ionized Fuel": {
      out: {
        "Packaged Ionized Fuel": 40,
      },
      in: {
        "Ionized Fuel": 80,
        "Empty Canister": 40,
      },
      machine: "Blender",
    },
    "Packaged Rocket Fuel": {
      out: {
        "Packaged Turbofuel": 60,
      },
      in: {
        "Rocket Fuel": 120,
        "Empty Canister": 60,
      },
      machine: "Blender",
    },
    "Packaged Turbofuel": {
      out: {
        "Packaged Turbofuel": 20,
      },
      in: {
        "Turbofuel": 20,
        "Empty Canister": 20,
      },
      machine: "Blender",
    },
  },
};
