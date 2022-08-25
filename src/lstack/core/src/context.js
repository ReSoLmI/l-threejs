import { isFunction, isNotEmptyObject } from '../../utils'
import Cookies from './cookie'
import EventBus from './event-bus'
import StorageEventBus from './storage-event-bus'

let appInstance
let routerInstance
let storeInstance
let mProject
let eventBusInstance
let storageEventBusInstance

const getProject = () => mProject

const setProject = project => {
  mProject = project
}

const getCookies = () => Cookies

const setApp = instance => {
  appInstance = instance
}

const getApp = () => appInstance

const setRouter = router => {
  routerInstance = router
  if (isNotEmptyObject(router) && isFunction(router.onError))
    router.onError(error => {
      if (/ChunkLoadError/i.test(error.message)) {
        window.location.reload()
      } else {
        console.error(error)
      }
    })
}

const getRouter = () => routerInstance

const getEventBus = () => {
  if (!eventBusInstance) {
    eventBusInstance = new EventBus()
  }
  return eventBusInstance
}

const getStorageEventBus = () => {
  if (!storageEventBusInstance) {
    storageEventBusInstance = new StorageEventBus()
  }
  return storageEventBusInstance
}

const setStore = store => {
  storeInstance = store
}

const getStore = () => storeInstance

export default {
  setApp,
  getApp,
  setRouter,
  getRouter,
  setStore,
  getStore,
  getCookies,
  getProject,
  setProject,
  getEventBus,
  getStorageEventBus,
}
