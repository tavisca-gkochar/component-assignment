import { html, customElement, LitElement, property } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
import styles from "./rating-bar-css";

@customElement("orxe-rating-bar")
export default class OrxeRatingBar extends LitElement {
  @property({ type: String, reflect: true })
  type: "linear" | "donut" = "linear";

  @property({ type: String, reflect: true })
  label = "";

  @property({ type: Number })
  rating = 0;

  @property({ type: Number })
  maxRating = 100;
  calcRating = 0;
  _ratingScoreEnum = {
    error: `--error`,
    poor: `--rating-poor`,
    warning: `--warning`,
    great: `--rating-great`,
    excellent: `--primary`,
    none: ``,
  };

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      ${this._renderRating()}
    `;
  }

  private _calculateRating() {
    if (this.rating < 0) {
      this.calcRating = 0;
    } else if (this.rating < this.maxRating) {
      this.calcRating = parseFloat(
        ((this.rating / this.maxRating) * 100).toFixed(2)
      );
    } else {
      this.calcRating = 100;
    }
  }

  private _getLinearStyles(): any {
    const linearFill = {};
    linearFill["width"] = `${this.calcRating}%`;
    linearFill["background-color"] = `var(${this._getScoreRangeColor()})`;
    if (this.calcRating === 100) {
      linearFill["border-top-right-radius"] = linearFill[
        "border-bottom-right-radius"
      ] = "20px";
    }
    return linearFill;
  }

  private _getDonutPercentageStyles(): any {
    const donutFill = {};
    donutFill["background"] = `linear-gradient(var(--neutral),
              var(--neutral)) padding-box,
              conic-gradient(var(${this._getScoreRangeColor()}) ${
      this.calcRating
    }%,
              var(--background-01) ${this.calcRating}%) border-box`;
    return donutFill;
  }

  _renderRating() {
    this._calculateRating();
    if (this.type === "donut") {
      return html`
        <div
          class="donut-circle"
          style="${styleMap(this._getDonutPercentageStyles())}"
        >
          <label class="donut-circle-label">${this.calcRating / 10}</label>
    </div>
      `;
    } else {
      return html`
        <div class="linear-bar">
          <span style="${styleMap(this._getLinearStyles())}"></span>
        </div>
        <div class="linear-bar-info">
          <span class="linear-bar-label">${this.label}</span>
          <span class="linear-bar-value">${this.calcRating / 10}</span>
        </div>
      `;
    }
  }

  _getScoreRangeColor(): string {
    if (this.calcRating >= 1 && this.calcRating <= 30) {
      return this._ratingScoreEnum.error;
    } else if (this.calcRating >= 30 && this.calcRating < 50) {
      return this._ratingScoreEnum.poor;
    } else if (this.calcRating >= 50 && this.calcRating < 70) {
      return this._ratingScoreEnum.warning;
    } else if (this.calcRating >= 70 && this.calcRating < 85) {
      return this._ratingScoreEnum.great;
    } else if (this.calcRating >= 85) {
      return this._ratingScoreEnum.excellent;
    } else {
      return this._ratingScoreEnum.none;
    }
  }
}
