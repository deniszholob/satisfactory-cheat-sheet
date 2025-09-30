export const data_refining_rates = {
    recipes: {
        Fuel: {
            out: {
                Fuel: 40,
                "Polymer Resin": 30,
            },
            in: {
                "Crude Oil": 60,
            },
            machine: "Refinery",
        },
        Plastic: {
            out: {
                Plastic: 20,
                "Heavy Oil Residue": 10,
            },
            in: {
                "Crude Oil": 30,
            },
            machine: "Refinery",
        },
        Rubber: {
            out: {
                Rubber: 20,
                "Heavy Oil Residue": 20,
            },
            in: {
                "Crude Oil": 30,
            },
            machine: "Refinery",
        },
        "Petroleum Coke": {
            out: {
                "Petroleum Coke": 120,
            },
            in: {
                "Heavy Oil Residue": 40,
            },
            machine: "Refinery",
        },
        "Residual Fuel": {
            out: {
                Fuel: 40,
            },
            in: {
                "Heavy Oil Residue": 60,
            },
            machine: "Refinery",
        },
        "Smokeless Powder": {
            out: {
                "Smokeless Powder": 20,
            },
            in: {
                "Black Powder": 20,
                "Heavy Oil Residue": 10,
            },
            machine: "Refinery",
        },
        "Residual Plastic": {
            out: {
                Plastic: 20,
            },
            in: {
                "Polymer Resin": 60,
                Water: 20,
            },
            machine: "Refinery",
        },
        "Residual Rubber": {
            out: {
                Rubber: 20,
            },
            in: {
                "Polymer Resin": 40,
                Water: 40,
            },
            machine: "Refinery",
        },
        "Polyester Fabric": {
            out: {
                "Fabric": 30,
            },
            in: {
                "Polymer Resin": 30,
                "Water": 30,
            },
            machine: "Refinery",
        },
        "Turbofuel": {
            out: {
                "Turbofuel": 18.75,
            },
            in: {
                "Fuel": 22.5,
                "Compacted Coal": 15,
            },
            machine: "Refinery",
        },
        "Rocket Fuel": {
            out: {
                "Rocket Fuel": 100,
                "Compacted Coal": 10,
            },
            in: {
                "Turbofuel": 60,
                "Nitric Acid": 10,
            },
            machine: "Refinery",
        },
        "Ionized Fuel": {
            out: {
                "Ionized Fuel": 40,
                "Compacted Coal": 5,
            },
            in: {
                "Rocket Fuel": 40,
                "Power Shard": 2.5,
            },
            machine: "Refinery",
        },
        "Sulfuric Acid": {
            out: {
                "Sulfuric Acid": 50,
            },
            in: {
                Sulfur: 50,
                Water: 50,
            },
            machine: "Refinery",
        },
        "Alumina Solution": {
            out: {
                "Alumina Solution": 120,
                Silica: 50,
            },
            in: {
                Bauxite: 120,
                Water: 180,
            },
            machine: "Refinery",
        },
        "Aluminum Scrap": {
            out: {
                "Aluminum Scrap": 360,
                "Water Out": 120,
            },
            in: {
                "Alumina Solution": 240,
                "Coal": 120,
            },
            machine: "Refinery",
        },
        "Liquid Biofuel": {
            out: {
                "Liquid Biofuel": 60,
            },
            in: {
                "Solid Biofuel": 90,
                "Water": 45,
            },
            machine: "Refinery",
        },
    },
};
