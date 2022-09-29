import { UpdatePayload } from "../audioNode"

export interface OscillatorProps {
  detune?: number
  frequency?: number
  type?: OscillatorType
}

export const createOscillatorInstance = ({ detune = 0, frequency = 440, type = 'sine' }: OscillatorProps, ctx: AudioContext): AudioNode => {
  const oscillatorNode = ctx.createOscillator()
  oscillatorNode.type = type
  oscillatorNode.frequency.setValueAtTime(frequency, ctx.currentTime)
  oscillatorNode.detune.setValueAtTime(detune, ctx.currentTime)
  oscillatorNode.start()
  return oscillatorNode
}

export const prepareOscillatorUpdate = (
  { frequency: oldFrequency, detune: oldDetune, type: oldType }: OscillatorProps,
  { frequency: newFrequency, detune: newDetune, type: newType }: OscillatorProps,
  ctx: AudioContext
): UpdatePayload => {
  const result: UpdatePayload = {
    ctx,
    params: [],
    values: [],
  }
  if (oldFrequency !== newFrequency) result.params.push('frequency')
  if (oldDetune !== newDetune) result.params.push('detune')
  if (oldType !== newType) result.values.push('type')
  return result
}
