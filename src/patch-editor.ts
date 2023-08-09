import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PatchDef } from './patch-def';

@customElement('patch-editor')
export class PatchEditor extends LitElement {

  static styles = css`
    textarea {
      width: 100%;
      height: 200px;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }
  `;

  private onTextareaChange(event: Event) {
    const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    try {
      const parsedValue: PatchDef = JSON.parse(textarea.value);

      // If parsed successfully, emit a custom event
      const patchEvent = new CustomEvent('patch-updated', {
        detail: parsedValue,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(patchEvent);
    } catch (error) {
      // Handle invalid JSON gracefully. 
      // You can either choose to alert the user or just console.log the error.
      console.error("Invalid PatchDef JSON:", error);
    }
  }

  render() {
    return html`
      <textarea @input=${this.onTextareaChange} placeholder="Paste your PatchDef here..."></textarea>
    `;
  }
}
