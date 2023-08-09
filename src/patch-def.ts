interface ADSREnvelope {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

interface Enveloped {
  envelope: ADSREnvelope
}

interface GainDef extends GainOptions, Enveloped {}

interface FilterDef extends BiquadFilterOptions, Enveloped {}

interface VoiceDef {
    oscillator: OscillatorOptions;
    filter: FilterDef;
    gain: GainDef;
    phase: number;
}

interface NoiseDef extends Enveloped {
  color: "white" | "pink" | "brown"
  gain: GainOptions
}

export interface PatchDef {
  voice1: VoiceDef;
  voice2: VoiceDef;
  noise1: NoiseDef;
  gain: GainOptions;
  name: string;
}