import { Data } from "../data.model";

export const data_manufacturing_rates: Data = {
  recipes: {
    "Modular Engine": {
      out: {
        "Modular Engine": 1,
      },
      in: {
        Motor: 2,
        Rubber: 15,
        "Smart Plating": 2,
      },
      machine: "Manufacturer",
    },
    "High-Speed Connector": {
      out: {
        "High-Speed Connector": 3.75,
      },
      in: {
        Quickwire: 210,
        Cable: 37.5,
        "Circuit Board": 3.75,
      },
      machine: "Manufacturer",
    },
    "Computer": {
      out: {
        "Computer": 2.5,
      },
      in: {
        "Circuit Board": 10,
        Cable: 20,
        Plastic: 40,
      },
      machine: "Manufacturer",
    },
    Supercomputer: {
      out: {
        Supercomputer: 1.875,
      },
      in: {
        Computer: 7.5,
        "AI Limiter": 3.75,
        "High-Speed Connector": 5.625,
        Plastic: 52.5,
      },
      machine: "Manufacturer",
    },
    "Heavy Modular Frame": {
      out: {
        "Heavy Modular Frame": 2,
      },
      in: {
        "Modular Frame": 10,
        "Steel Pipe": 40,
        "Encased Industrial Beam": 10,
        Screw: 240,
      },
      machine: "Manufacturer",
    },
    "Adaptive Control Unit": {
      out: {
        "Adaptive Control Unit": 1,
      },
      in: {
        "Automated Wiring": 7.5,
        "Circuit Board": 5,
        "Heavy Modular Frame": 1,
        "Computer": 1,
      },
      machine: "Manufacturer",
    },
    "Crystal Oscillator": {
      out: {
        "Crystal Oscillator": 1,
      },
      in: {
        "Quartz Crystal": 18,
        Cable: 14,
        "Reinforced Iron Plate": 2.5,
      },
      machine: "Manufacturer",
    },
    "Radio Control Unit": {
      out: {
        "Radio Control Unit": 2.5,
      },
      in: {
        "Aluminum Casing": 40,
        "Crystal Oscillator": 1.25,
        Computer: 2.5,
      },
      machine: "Manufacturer",
    },
    "Turbo Motor": {
      out: {
        "Turbo Motor": 1.875,
      },
      in: {
        "Cooling System": 7.5,
        "Radio Control Unit": 3.75,
        "Motor": 7.5,
        "Rubber": 45,
      },
      machine: "Manufacturer",
    },
    "Thermal Propulsion Rocket": {
      out: {
        "Thermal Propulsion Rocket": 1,
      },
      in: {
        "Modular Engine": 2.5,
        "Turbo Motor": 1,
        "Cooling System": 3,
        "Fused Modular Frame": 1,
      },
      machine: "Manufacturer",
    },
    "SAM Fluctuator": {
      out: {
        "SAM Fluctuator": 10,
      },
      in: {
        "Reanimated SAM": 60,
        "Wire": 50,
        "Steel Pipe": 30,
      },
      machine: "Manufacturer",
    },
    "Singularity Cell": {
      out: {
        "Singularity Cell": 10,
      },
      in: {
        "Nuclear Pasta": 1,
        "Dark Matter Crystal": 20,
        "Iron Plate": 100,
        "Concrete": 200,
      },
      machine: "Manufacturer",
    },
    "Ballistic Warp Drive": {
      out: {
        "Ballistic Warp Drive": 1,
      },
      in: {
        "Thermal Propulsion Rocket": 1,
        "Singularity Cell": 5,
        "Superposition Oscillator": 2,
        "Dark Matter Crystal": 40,
      },
      machine: "Manufacturer",
    },
    "Uranium Fuel Rod": {
      out: {
        "Uranium Fuel Rod": 0.4,
      },
      in: {
        "Encased Uranium Cell": 20,
        "Encased Industrial Beam": 1.2,
        "Electromagnetic Control Rod": 2,
      },
      machine: "Manufacturer",
    },
    "Plutonium Fuel Rod": {
      out: {
        "Plutonium Fuel Rod": 0.25,
      },
      in: {
        "Encased Plutonium Cell": 7.5,
        "Steel Beam": 4.5,
        "Electromagnetic Control Rod": 1.5,
        "Heat Sink": 2.5,
      },
      machine: "Manufacturer",
    },

    "Explosive Rebar": {
      out: {
        "Explosive Rebar": 5,
      },
      in: {
        "Iron Rebar": 10,
        "Smokeless Powder": 10,
        "Steel Pipe": 10,
      },
      machine: "Manufacturer",
    },
    "Gas Filter": {
      out: {
        "Gas Filter": 7.5,
      },
      in: {
        "Fabric": 15,
        "Coal": 30,
        "Iron Plate": 15,
      },
      machine: "Manufacturer",
    },
    "Iodine-Infused Filter": {
      out: {
        "Iodine-Infused Filter": 3.75,
      },
      in: {
        "Gas Filter": 3.75,
        "Quickwire": 30,
        "Aluminum Casing": 3.75,
      },
      machine: "Manufacturer",
    },
    "Nuke Nobelisk": {
      out: {
        "Nuke Nobelisk": 0.5,
      },
      in: {
        Nobelisk: 2.5,
        "Encased Uranium Cell": 10,
        "Smokeless Powder": 5,
        "AI Limiter": 3,
      },
      machine: "Manufacturer",
    },
    "Turbo Rifle Ammo": {
      out: {
        "Turbo Rifle Ammo": 250,
      },
      in: {
        "Rifle Ammo": 125,
        "Aluminum Casing": 15,
        "Packaged Turbofuel": 15,
      },
      machine: "Manufacturer",
    },
  },
};
