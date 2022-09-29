import { UpdatePayload } from "../audioNode"
import { createGainInstance, GainProps, prepareGainUpdate } from "./gain"
import { createOscillatorInstance, OscillatorProps, prepareOscillatorUpdate } from "./oscillator"

export interface IntrinsicWagElements {
  oscillator: OscillatorProps
  gain: GainProps
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends IntrinsicWagElements { }
  }
}

export const createInstance = <Element extends keyof IntrinsicWagElements>(type: Element, props: IntrinsicWagElements[Element], rootContainer: AudioContext): AudioNode => {
  switch (type) {
    case 'oscillator':
      return createOscillatorInstance(props as OscillatorProps, rootContainer)
    case 'gain':
      return createGainInstance(props as GainProps, rootContainer)
  }
}

export const prepareUpdate = <Element extends keyof IntrinsicWagElements>(_: AudioNode, type: Element, oldProps: IntrinsicWagElements[Element], newProps: IntrinsicWagElements[Element], ctx: AudioContext): UpdatePayload => {
  switch (type) {
    case 'oscillator':
      return prepareOscillatorUpdate(oldProps as OscillatorProps, newProps as OscillatorProps, ctx)
    case 'gain':
      return prepareGainUpdate(oldProps as GainProps, newProps as GainProps, ctx)
  }
}
