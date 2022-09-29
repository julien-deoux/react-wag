import { ReactNode } from 'react'
import * as ReactReconciler from 'react-reconciler'

import { commitUpdate, UpdatePayload } from './audioNode'

import { createInstance, IntrinsicWagElements, prepareUpdate } from './elements'

type ElementType = keyof IntrinsicWagElements
type Props = IntrinsicWagElements[keyof IntrinsicWagElements]
type SuspenseInstance = any
type HydratableInstance = any
type HostContext = {}
type _ChildSet = any
type TimeoutHandle = any
type NoTimeout = number

const rootHostContext = {}

interface Detachable<T> {
  detachDeletedInstance: (instance: T) => void
}

const hostConfig: Detachable<AudioNode> & ReactReconciler.HostConfig<
  ElementType,
  Props,
  AudioContext,
  AudioNode,
  null,
  SuspenseInstance,
  HydratableInstance,
  AudioNode,
  HostContext,
  UpdatePayload,
  _ChildSet,
  TimeoutHandle,
  NoTimeout
> = {
  createInstance,

  createTextInstance() {
    return null
  },

  supportsHydration: false,
  supportsMutation: true,
  supportsPersistence: false,
  noTimeout: -1,
  isPrimaryRenderer: false,

  appendInitialChild(parentInstance, child) {
    if (!parentInstance.numberOfInputs) return
    child.connect(parentInstance)
  },

  appendChild(parentInstance, child) {
    if (!parentInstance.numberOfInputs) return
    child.connect(parentInstance)
  },

  removeChild(parentInstance, child: AudioNode) {
    child.disconnect(parentInstance)
  },

  finalizeInitialChildren() {
    return false
  },

  prepareUpdate,

  insertBefore(parentInstance, child) {
    if (!parentInstance.numberOfInputs) return
    child.connect(parentInstance)
  },

  shouldSetTextContent() {
    return false
  },

  getRootHostContext() {
    return rootHostContext
  },

  getChildHostContext(parentHostContext) {
    return parentHostContext
  },

  getPublicInstance(instance) {
    return instance
  },

  prepareForCommit() {
    return null
  },

  resetAfterCommit() {
    // Do nothing
  },

  preparePortalMount() {
    // Do nothing
  },

  now() {
    return performance.now()
  },

  scheduleTimeout() {
    return setTimeout
  },

  cancelTimeout() {
    return clearTimeout
  },

  clearContainer() { },

  appendChildToContainer(ctx, child) {
    child.connect(ctx.destination)
  },

  insertInContainerBefore(ctx, child) {
    child.connect(ctx.destination)
  },

  removeChildFromContainer(ctx, child) {
    child.disconnect(ctx.destination)
  },

  commitUpdate,

  detachDeletedInstance(instance) {
    instance.dispatchEvent(new Event('clear'))
  },
}

const reconciler = ReactReconciler(hostConfig)

const render = (component: ReactNode, ctx: AudioContext) => {
  const root = reconciler.createContainer(ctx, 0, null, false, null, '', () => { }, null)
  reconciler.updateContainer(component, root, null)
}

export default { render }
