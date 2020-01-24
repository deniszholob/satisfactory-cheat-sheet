// Imports
import { RatioRenderService } from "./services/ratio-render-service.js";
import { data_common_ratios } from "./data.js";

// Constants

const elRoot = document.getElementById("Generate_HTML");
const renderService = new RatioRenderService(elRoot);

function onInit() {
  renderData();
}

function renderData() {
  if (typeof data_common_ratios === 'undefined' || data_common_ratios === null) {
    console.error("Error: data is null...");
  } else {
    // Clear list
    elRoot.innerHTML = "";
    // Generate list
    renderService.render(data_common_ratios);
  }
}

onInit();
