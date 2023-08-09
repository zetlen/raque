import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('raque-unit')
export class RaqueUnit extends LitElement {
  @property({type: AudioContext}) context;
  static styles = css`
    :root {
      outline: 1px solid red;
    }
  `;

  connectedCallback() {
    let ancestor = this.parentElement;
    while (ancestor !== ancestor.parentElement) {
      if (ancestor.audioContext instanceof Audio) {
        return 
      }

    }
  }

  render() {
    return html`
      <kbd>${this.constructor.name}</kbd>
    `;
  }

}
