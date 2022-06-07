import { audioHandler } from 'src/routes/audio/audioHandler';
import { AUDIO_INVOKE } from 'src/routes/audio/constants';
import { batteryHandler } from 'src/routes/battery/batteryHandler';
import { BATTERY_INVOKE } from 'src/routes/battery/constants';
import { CPU_INVOKE } from 'src/routes/cpu/constants';
import { cpuHandler } from 'src/routes/cpu/cpuHandler';
import { GRAPHICS_INVOKE } from 'src/routes/graphics/constants';
import { graphicsHandler } from 'src/routes/graphics/graphicsHandler';
import {
  MEMORY_INVOKE,
  MEMORY_LAYOUT_INVOKE
} from 'src/routes/memory/constants';
import {
  memoryHandler,
  memoryLayoutHandler
} from 'src/routes/memory/memoryHandler';
import {
  NETWORK_CONNECTIONS_INVOKE,
  NETWORK_INTERFACES_INVOKE,
  NETWORK_STATS_INVOKE
} from 'src/routes/network/constants';
import {
  networkConnectionsHandler,
  networkInterfaceHandler,
  networkStatsHandler
} from 'src/routes/network/networkHandler';
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
import { PRINTER_INVOKE } from 'src/routes/printer/constants';
import { printerHandler } from 'src/routes/printer/printerHandler';
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
import { USB_INVOKE } from 'src/routes/usb/constants';
import { usbHandler } from 'src/routes/usb/usbHandler';

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

const graphicsHandlers = [
  {
    invoke: GRAPHICS_INVOKE,
    handler: graphicsHandler
  }
];

const audioHandlers = [
  {
    invoke: AUDIO_INVOKE,
    handler: audioHandler
  }
];

const cpuHandlers = [
  {
    invoke: CPU_INVOKE,
    handler: cpuHandler
  }
];

const batteryHandlers = [
  {
    invoke: BATTERY_INVOKE,
    handler: batteryHandler
  }
];

const memoryHandlers = [
  {
    invoke: MEMORY_INVOKE,
    handler: memoryHandler
  },
  {
    invoke: MEMORY_LAYOUT_INVOKE,
    handler: memoryLayoutHandler
  }
];

const usbHandlers = [
  {
    invoke: USB_INVOKE,
    handler: usbHandler
  }
];

const printerHandlers = [
  {
    invoke: PRINTER_INVOKE,
    handler: printerHandler
  }
];

const networkHandlers = [
  {
    invoke: NETWORK_INTERFACES_INVOKE,
    handler: networkInterfaceHandler
  },
  {
    invoke: NETWORK_STATS_INVOKE,
    handler: networkStatsHandler
  },
  {
    invoke: NETWORK_CONNECTIONS_INVOKE,
    handler: networkConnectionsHandler
  }
];

export const handlers = [
  ...osHandlers,
  ...systemHandlers,
  ...graphicsHandlers,
  ...audioHandlers,
  ...cpuHandlers,
  ...batteryHandlers,
  ...memoryHandlers,
  ...usbHandlers,
  ...printerHandlers,
  ...networkHandlers,
  {
    invoke: PROCESSUS_LIST_INVOKE,
    handler: processusListHandler
  },
  {
    invoke: CURRENT_LOAD_INVOKE,
    handler: currentLoadHandler
  }
];
