import { UtilService } from './util-service.js';
/** Renders out the blueprint entries in a list */
export class RatioRenderService {
    /**
     * @param {HTMLElement} rootElement Root element to add the generated html to
     */
    constructor(rootElement) {
        this.elRoot = rootElement;
    }
    render(data, title) {
        const elRatios_1 = document.createElement("div");
        elRatios_1.classList.value = "list-group";
        data.forEach((data) => {
            const elDp = renderDataPoint(data);
            if (elDp) {
                elRatios_1.appendChild(elDp);
            }
        });
        if (title && title.length > 0) {
            const elTitle = document.createElement('h4');
            elTitle.innerHTML = title || '';
            elTitle.className = 'text-center full-width';
            this.elRoot.appendChild(elTitle);
        }
        this.elRoot.appendChild(elRatios_1);
    }
}
/**
 * @returns a list tag item containing an "a" tag external link
 * @param {*} data Link Data
 */
function renderDataPoint(data) {
    // Do not render empty values
    if (data.productionItems && data.productionItems.length > 0) {
        const link = data.link ? data.link : UtilService.getKirkLink(data.productionItems[0].name, data.productionItems[0].count);
        const elLink = UtilService.getExternalLinkEl(link);
        elLink.classList.value = "list-group-item";
        data.productionItems.forEach((item) => {
            const elItemIcon = UtilService.getSfIconProductionItem(item.name, item.machine, item.count);
            elLink.appendChild(elItemIcon);
        });
        if (data.trueRatio === false) {
            const elNote = document.createElement('span');
            elNote.innerHTML = "*Approximate";
            elLink.appendChild(elNote);
        }
        return elLink;
    }
}
