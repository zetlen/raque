import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './patch-playground.ts'; // Adjust the path to your PatchPlayground component

@customElement('demo-app')
export class DemoApp extends LitElement {

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }
  `;

  render() {
    return html`
      <h1>Welcome to Patch Playground Demo</h1>
      <patch-playground></patch-playground>
    `;
  }
}

// Render the demo app
const appRoot = document.createElement('demo-app');
document.body.appendChild(appRoot);
