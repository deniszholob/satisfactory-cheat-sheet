import { iconUrlMap, localIconUrlMap } from "../icon_url_map.js";

const sf_calc_icons:string[] = [
  // "Copper Sheet",
  // "Solid Biofuel",
  // "Non Fissile Uranium",
  // "Nitric Acid",
  // "Plutonium Pellet",
  // "Nuclear Pasta",
  // "Encased Plutonium Cell",
  // "Plutonium Fuel Rod",
  // "Plutonium Waste",
];

/** Common functions for links */
export class UtilService {
  /**
   * <a href="url" rel="noopener" target="_blank"></a>
   * @param {String} url
   */
  static getExternalLinkEl(url: string): HTMLAnchorElement {
    const elLink: HTMLAnchorElement = document.createElement("a");
    elLink.href = url;
    elLink.rel = "noopener";
    elLink.target = "_blank";
    return elLink;
  }

  /**
   * <i class="fas fa-id"></i>
   * @param {String} id of the Font Awesome Icon
   */
  static getFaIcon(id: String): HTMLElement {
    const elIcon: HTMLElement = document.createElement("i");
    elIcon.classList.value = "fas fa-xs fa-" + id;
    return elIcon;
  }

  static getKirkLink(item: string, count: number): string {
    return `https://kirkmcdonald.github.io/satisfactory-calculator/calc.html#tab=totals&items=${
      item
      .replace(/[_ ]/g, "-")
      .toLowerCase()}:f:${count}`;
  }

  /**
   * @return url string
   * @param {String} name
   */
  static getSfIconPath(name: string): string {
    if (sf_calc_icons.includes(name)) {
      return "https://static.satisfactory-calculator.com/img/gameUI/IconDesc_" + name.replace(/ /g, "") + "_256.png";
    } else if (Object.keys(localIconUrlMap).includes(name)) {
      return (
        Object.entries(localIconUrlMap).find(([k, v]: [string, string]): boolean => {
          return k.includes(name);
        })?.[1] || ""
      );
    } else if (Object.keys(iconUrlMap).includes(name)) {
      return (
        Object.entries(iconUrlMap).find(([k, v]: [string, string]): boolean => {
          return k.includes(name);
        })?.[1] || ""
      );
    }
    // return "https://kirkmcdonald.github.io/satisfactory-calculator/images/" + name + ".png";
    return `https://raw.githubusercontent.com/KirkMcDonald/satisfactory-calculator/refs/heads/master/images/` + name + ".png";
  }

  /**
   * <img src="url" alt="name" title="name">
   * @param {String} name
   */
  static getSfIcon(name: string): HTMLImageElement {
    if (name) {
      name = name.replace(/_/g, " ");
      name = name.replace(/\w\S*/g, (txt: string): string => {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      });
    }
    const elImage: HTMLImageElement = document.createElement("img");
    elImage.src = this.getSfIconPath(name);
    elImage.alt = name;
    elImage.title = name;
    return elImage;
  }

  static getHrName(name: string): string {
    if (name) {
      name = name.replace(/_/g, " ");
      name = name.replace(/\w\S*/g, (txt: string): string => {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      });
    }
    return name;
  }

  /**
   *
   * @param {String} product
   * @param {String} machine
   */
  static getSfIconProductionItem(product: string, machine: string, count: number): HTMLDivElement {
    const elDivIcon: HTMLDivElement = document.createElement("div");
    elDivIcon.classList.value = "icon-composite";
    const elImgBg: HTMLImageElement = this.getSfIcon(machine);
    elImgBg.classList.value = "icon icon-bg";
    const elImgFg: HTMLImageElement = this.getSfIcon(product);
    elImgFg.classList.value = "icon icon-fg";
    const elSpan: HTMLSpanElement = document.createElement("span");
    elSpan.appendChild(document.createTextNode(count.toString()));
    elSpan.classList.value = "icon-text";

    elDivIcon.appendChild(elImgBg);
    elDivIcon.appendChild(elImgFg);
    elDivIcon.appendChild(elSpan);

    return elDivIcon;
  }
}
