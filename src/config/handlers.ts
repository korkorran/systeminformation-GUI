import { OS_INVOKE } from 'src/routes/os/constants';
import { osHandler } from 'src/routes/os/osHandler';
import {
  CURRENT_LOAD_INVOKE,
  PROCESSUS_LIST_INVOKE
} from 'src/routes/processus/constants';
import {
  currentLoadHandler,
  processusListHandler
} from 'src/routes/processus/processusListHandler';
import { SYSTEM_INVOKE } from 'src/routes/system/constants';
import { systemHandler } from 'src/routes/system/systemHandler';

export const handlers = [
  {
    invoke: PROCESSUS_LIST_INVOKE,
    handler: processusListHandler
  },
  {
    invoke: CURRENT_LOAD_INVOKE,
    handler: currentLoadHandler
  },
  {
    invoke: SYSTEM_INVOKE,
    handler: systemHandler
  },
  {
    invoke: OS_INVOKE,
    handler: osHandler
  }
];
