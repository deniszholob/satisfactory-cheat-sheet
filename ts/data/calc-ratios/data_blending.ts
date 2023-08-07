export const data_blending_rates: any = {
  recipes: {
    "Cooling System": {
      out: {
        "Cooling System": 6,
      },
      in: {
        "Heat Sink": 12,
        Rubber: 12,
        Water: 30,
        "Nitrogen Gas": 150,
      },
      machine: "Blender",
    },
    "Fused Modular Frame": {
      out: {
        "Fused Modular Frame": 1.5,
      },
      in: {
        "Heavy Modular Frame": 1.5,
        "Aluminum Casing": 75,
        "Nitrogen Gas": 37.5,
      },
      machine: "Blender",
    },
    Battery: {
      out: {
        Battery: 20,
        "Water Out": 30,
      },
      in: {
        "Sulfuric Acid": 50,
        "Alumina Solution": 40,
        "Aluminum Casing": 20,
      },
      machine: "Blender",
    },
    "Encased Uranium Cell": {
      out: {
        "Encased Uranium Cell": 25,
        "Sulfuric Acid": 10,
      },
      in: {
        Uranium: 50,
        Concrete: 15,
        "Sulfuric Acid": 40,
      },
      machine: "Blender",
    },
    "Nitric Acid": {
      out: {
        "Nitric Acid": 30,
      },
      in: {
        "Nitrogen Gas": 120,
        Water: 30,
        "Iron Plate": 10,
      },
      machine: "Blender",
    },
    "Non Fissile Uranium": {
      out: {
        "Non Fissile Uranium": 50,
        "Water Out": 15,
      },
      in: {
        "Uranium Waste": 37.5,
        Silica: 25,
        "Nitric Acid": 15,
        "Sulfuric Acid": 15,
      },
      machine: "Blender",
    },
  },
};
