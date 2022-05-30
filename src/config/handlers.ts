import {
  OS_INVOKE,
  USERS_INVOKE,
  VERSIONS_INVOKE
} from 'src/routes/os/constants';
import {
  osHandler,
  softwareVersionsHandler,
  usersHandler
} from 'src/routes/os/osHandler';
import {
  CURRENT_LOAD_INVOKE,
  PROCESSUS_LIST_INVOKE
} from 'src/routes/processus/constants';
import {
  currentLoadHandler,
  processusListHandler
} from 'src/routes/processus/processusListHandler';
import {
  BASEBOARD_INVOKE,
  BIOS_INVOKE,
  CHASSIS_INVOKE,
  SYSTEM_INVOKE,
  UUID_INVOKE
} from 'src/routes/system/constants';
import {
  baseboardHandler,
  biosHandler,
  chassisHandler,
  systemHandler,
  uuidsHandler
} from 'src/routes/system/systemHandler';

const osHandlers = [
  {
    invoke: OS_INVOKE,
    handler: osHandler
  },
  {
    invoke: VERSIONS_INVOKE,
    handler: softwareVersionsHandler
  },
  {
    invoke: USERS_INVOKE,
    handler: usersHandler
  }
];

const systemHandlers = [
  {
    invoke: SYSTEM_INVOKE,
    handler: systemHandler
  },
  {
    invoke: UUID_INVOKE,
    handler: uuidsHandler
  },
  {
    invoke: BIOS_INVOKE,
    handler: biosHandler
  },
  {
    invoke: BASEBOARD_INVOKE,
    handler: baseboardHandler
  },
  {
    invoke: CHASSIS_INVOKE,
    handler: chassisHandler
  }
];

export const handlers = [
  ...osHandlers,
  ...systemHandlers,
  {
    invoke: PROCESSUS_LIST_INVOKE,
    handler: processusListHandler
  },
  {
    invoke: CURRENT_LOAD_INVOKE,
    handler: currentLoadHandler
  }
];
