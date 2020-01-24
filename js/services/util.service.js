
/** Common functions for links */
export class UtilService {
  /**
   * <a href="url" rel="noopener" target="_blank"></a>
   * @param {String} url
   */
  static getExternalLinkEl(url) {
    const elLink = document.createElement("a");
    elLink.href = url;
    elLink.rel = "noopener";
    elLink.target = "_blank";
    return elLink;
  }

  /**
   * <i class="fas fa-id"></i>
   * @param {String} id of the Font Awesome Icon
   */
  static getFaIcon(id) {
    const elIcon = document.createElement("i");
    elIcon.classList = "fas fa-xs fa-" + id;
    return elIcon;
  }


  /**
   * @return url string
   * @param {String} name
   */
  static getSfIconPath(name) {
    return "https://kirkmcdonald.github.io/satisfactory-calculator/images/" + name + ".png";
  }

  /**
   * <img src="url" alt="name" title="name">
   * @param {String} name
   */
  static getSfIcon(name) {
    const elImage = document.createElement("img");
    elImage.src = this.getSfIconPath(name);
    elImage.alt = name;
    elImage.title = name;
    return elImage;
  }

  /**
   *
   * @param {String} product
   * @param {String} machine
   */
  static getSfIconProductionItem(product, machine, count) {
    const elDivIcon = document.createElement("div");
    elDivIcon.classList = "icon-composite";
    const elImgBg = this.getSfIcon(machine);
    elImgBg.classList = "icon icon-bg";
    const elImgFg = this.getSfIcon(product);
    elImgFg.classList = "icon icon-fg";
    const elSpan = document.createElement("span");
    elSpan.appendChild(document.createTextNode(count));
    elSpan.classList = "icon-text";

    elDivIcon.appendChild(elImgBg);
    elDivIcon.appendChild(elImgFg);
    elDivIcon.appendChild(elSpan);

    return elDivIcon;
  }
}
