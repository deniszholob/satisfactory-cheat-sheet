export const data_nuclear_rates = {
    recipes: {
        "Uranium Waste": {
            out: {
                "Uranium Waste": 10,
                "ENERGY": 2500,
            },
            in: {
                "Uranium Fuel Rod": 0.2,
                "Water": 240,
            },
            machine: "Nuclear Power Plant",
        },
        "Plutonium Waste": {
            out: {
                "Plutonium Waste": 1,
                "ENERGY": 2500,
            },
            in: {
                "Plutonium Fuel Rod": 0.1,
                "Water": 240,
            },
            machine: "Nuclear Power Plant",
        },
        "Ficsonium Energy": {
            out: {
                "ENERGY": 2500,
            },
            in: {
                "Ficsonium Fuel Rod": 1,
                "Water": 240,
            },
            machine: "Nuclear Power Plant",
        },
    },
};
