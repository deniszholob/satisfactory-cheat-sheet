// Imports
import { UtilService } from './util.service.js';

/** Renders out the blueprint entries in a list */
export class RatioRenderService {
  /**
   * @param {HTMLElement} rootElement Root element to add the generated html to
   */
  constructor(rootElement) {
    this.elRoot = rootElement;
  }

  render(data) {
    const elRatios_1 = document.createElement("div");
    elRatios_1.classList = "list-group fixed-width";
    const elRatios_2 = document.createElement("div");
    elRatios_2.classList = "list-group fixed-width";

    data["Ratios_Smelting"].forEach(data => {
      const elDp = renderDataPoint(data);
      if (elDp) { elRatios_1.appendChild(elDp); }
    });

    data["Ratios_Construction"].forEach(data => {
      const elDp = renderDataPoint(data);
      if (elDp) { elRatios_2.appendChild(elDp); }
    });

    this.elRoot.appendChild(elRatios_1);
    this.elRoot.appendChild(elRatios_2);
  }


}

  /**
   * @returns a list tag item containing an "a" tag external link
   * @param {*} data Link Data
   */
  function renderDataPoint(data) {
    // Do not render empty values
    if (data.ratio && data.ratio.length > 0) {
      const elLink = UtilService.getExternalLinkEl(data.src);
      elLink.classList = "list-group-item"
      data.ratio.forEach(item => {
        const elItemIcon = UtilService.getSfIconProductionItem(item.product, item.machine, item.count);
        elLink.appendChild(elItemIcon);
      });

      return elLink;
    }
  }
