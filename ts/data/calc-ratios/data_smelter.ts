import { Data } from "../data.model";

export const data_smelter_rates: Data = {
  "recipes": {
    "Iron Ingot": {
      "out": {
        "Iron Ingot": 30
      },
      "in": {
        "Iron Ore": 30
      },
      "machine": "smelter"
    },
    "Copper Ingot": {
      "out": {
        "Copper Ingot": 30
      },
      "in": {
        "Copper Ore": 30
      },
      "machine": "smelter"
    },
    "Caterium Ingot": {
      "out": {
        "Caterium Ingot": 15
      },
      "in": {
        "Caterium Ore": 45
      },
      "machine": "smelter"
    },
    // "Aluminum Ingot Alt": {
    //   "out": {
    //     "Aluminum Ingot": 30
    //   },
    //   "in": {
    //     "Aluminum Scrap": 60,
    //   },
    //   "machine": "smelter"
    // }
  }
}
