import { ipcRenderer, contextBridge } from 'electron';
import { OS_INVOKE } from './routes/os/constants';
import {
  CURRENT_LOAD_INVOKE,
  PROCESSUS_LIST_INVOKE
} from './routes/processus/constants';
import { SYSTEM_INVOKE } from './routes/system/constants';

contextBridge.exposeInMainWorld('electron', {
  processus_list: () => ipcRenderer.invoke(PROCESSUS_LIST_INVOKE),
  current_load: () => ipcRenderer.invoke(CURRENT_LOAD_INVOKE),
  system: () => ipcRenderer.invoke(SYSTEM_INVOKE),
  os_info: () => ipcRenderer.invoke(OS_INVOKE)
});
