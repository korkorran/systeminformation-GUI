import { ipcRenderer, contextBridge } from 'electron';
import { Handlers, handlers } from './config/handlers';

declare global {
  interface Window {
    invoke : Handlers
  }
}

const invokeMap = Object.fromEntries(
  Object.entries(handlers).map(
    ([k, _]) => [k, () => ipcRenderer.invoke(k)]
  )
)

contextBridge.exposeInMainWorld('invoke', invokeMap)
