import { UpdatePayload } from "../audioNode"

export interface GainProps {
  gain?: number
}

export const createGainInstance = ({ gain = 1 }: GainProps, ctx: AudioContext): AudioNode => {
  const gainNode = ctx.createGain()
  gainNode.gain.setValueAtTime(gain, ctx.currentTime)
  return gainNode
}

export const prepareGainUpdate = (
  { gain: oldGain }: GainProps,
  { gain: newGain }: GainProps,
  ctx: AudioContext
): UpdatePayload => {
  const result: UpdatePayload = {
    ctx,
    params: [],
    values: [],
  }
  if (oldGain !== newGain) result.params.push('gain')
  return result
}
