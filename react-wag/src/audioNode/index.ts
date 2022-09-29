import { IntrinsicWagElements } from "../elements"

export interface UpdatePayload {
  params: string[]
  values: string[]
  ctx: AudioContext
}

export const commitUpdate = <Element extends keyof IntrinsicWagElements>(
  instance: AudioNode,
  updatePayload: UpdatePayload,
  _type: Element,
  _oldProps: IntrinsicWagElements[Element],
  nextProps: IntrinsicWagElements[Element]
): void => {
  for (const param in updatePayload.params) {
    const audioParam = instance[param] as AudioParam
    audioParam.setValueAtTime(nextProps[param], updatePayload.ctx.currentTime)
  }
  for (const value in updatePayload.values) {
    instance[value] = nextProps[value]
  }
}
