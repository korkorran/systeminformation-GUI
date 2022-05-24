import './styles/style.scss';
import './app';
import { CurrentLoad } from './routes/processus/processusListHandler';
import { SystemData } from './routes/system/systemHandler';

declare global {
  interface Window {
    electron: {
      processus_list: () => Promise<CurrentLoad>;
      current_load: () => Promise<CurrentLoad>;
      system: () => Promise<SystemData>;
    };
  }
}