import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PatchDef } from './patch-def';

@customElement('audio-synth')
export class AudioSynth extends LitElement {

  static styles = css`
    button {
      padding: 10px;
      border: none;
      background-color: #0077ff;
      color: white;
      cursor: pointer;
    }
  `;

  private audioContext: AudioContext = new AudioContext();
  private oscillator1?: OscillatorNode;

  @property({ type: Object })
  set patch(patchDef: PatchDef) {
    this._patch = patchDef;

    // Initialize Web Audio API elements based on the patchDef here
    // This example only sets up oscillator for voice1, but you can expand upon this for full implementation.
    this.oscillator1 = this.audioContext.createOscillator();
    this.oscillator1.type = this._patch.voice1.oscillator.type as OscillatorType;
    this.oscillator1.frequency.setValueAtTime(55, this.audioContext.currentTime); // A1 = 55 Hz
  }

  private _patch: PatchDef;

  playNote() {
    if (this.oscillator1) {
      this.oscillator1.connect(this.audioContext.destination);
      this.oscillator1.start();
      this.oscillator1.stop(this.audioContext.currentTime + 1); // Stops after 1 second
    }
  }

  render() {
    return html`
      <button @click=${this.playNote}>Play A1</button>
    `;
  }
}
