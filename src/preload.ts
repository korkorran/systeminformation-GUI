import { ipcRenderer, contextBridge } from 'electron';
import { OS_INVOKE, VERSIONS_INVOKE } from './routes/os/constants';
import {
  CURRENT_LOAD_INVOKE,
  PROCESSUS_LIST_INVOKE
} from './routes/processus/constants';
import { SYSTEM_INVOKE } from './routes/system/constants';
import { CurrentLoad } from './routes/processus/processusListHandler';
import { SystemData } from './routes/system/systemHandler';
import { OsData, VersionData } from './routes/os/osHandler';

declare global {
  interface Window {
    electron: {
      processus_list: () => Promise<CurrentLoad>;
      current_load: () => Promise<CurrentLoad>;
      system: () => Promise<SystemData>;
      os_info: () => Promise<OsData>;
      software_versions: () => Promise<VersionData>;
    };
  }
}


contextBridge.exposeInMainWorld('electron', {
  processus_list: () => ipcRenderer.invoke(PROCESSUS_LIST_INVOKE),
  current_load: () => ipcRenderer.invoke(CURRENT_LOAD_INVOKE),
  system: () => ipcRenderer.invoke(SYSTEM_INVOKE),
  os_info: () => ipcRenderer.invoke(OS_INVOKE),
  software_versions: () => ipcRenderer.invoke(VERSIONS_INVOKE)
});
