import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.log(error)
}
