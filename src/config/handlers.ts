import SI from 'systeminformation';
import { audioHandler } from 'src/routes/audio/audioHandler';
import { batteryHandler } from 'src/routes/battery/batteryHandler';
import { cpuHandler } from 'src/routes/cpu/cpuHandler';
import { graphicsHandler } from 'src/routes/graphics/graphicsHandler';
import {
  memoryHandler,
  memoryLayoutHandler
} from 'src/routes/memory/memoryHandler';
import {
  networkConnectionsHandler,
  networkInterfaceHandler,
  networkStatsHandler
} from 'src/routes/network/networkHandler';
import {
  osHandler,
  softwareVersionsHandler,
  usersHandler
} from 'src/routes/os/osHandler';
import { printerHandler } from 'src/routes/printer/printerHandler';
import {
  baseboardHandler,
  biosHandler,
  chassisHandler,
  systemHandler,
  uuidsHandler
} from 'src/routes/system/systemHandler';
import { usbHandler } from 'src/routes/usb/usbHandler';
import { wifiConnections, wifiInterfaces, wifiNetworks } from 'src/routes/wifi/wifiHandler';
import { bluetoothDevices } from 'src/routes/bluetooth/bluetoothHandler';
import { dockerInfo } from 'src/routes/docker/dockerHandler';



const osHandlers = {
  os : osHandler,
  software_versions : softwareVersionsHandler,
  users : usersHandler
}

const systemHandlers = {
  system : systemHandler,
  uuids : uuidsHandler,
  bios : biosHandler,
  baseboard : baseboardHandler,
  chassis : chassisHandler
}

const graphicsHandlers = {
  graphics : graphicsHandler
}

const audioHandlers = {
  audio : audioHandler
}

const cpuHandlers = {
  cpu : cpuHandler,
}

const batteryHandlers = {
  battery : batteryHandler
}

const memoryHandlers = {
  memory:  memoryHandler,
  memory_layout: memoryLayoutHandler
}

const usbHandlers = {
  usb : usbHandler
}

const printerHandlers = {
  printer : printerHandler
}

const networkHandlers = {
  network_interfaces : networkInterfaceHandler,
  network_stats : networkStatsHandler,
  network_connections : networkConnectionsHandler
}

const wifiHandlers = {
  wifi_networks : wifiNetworks,
  wifi_interfaces : wifiInterfaces,
  wifi_connections : wifiConnections
}

const bluetoothHandlers = {
  bluetooth_devices : bluetoothDevices
}

const dockerHandlers = {
  docker_info : dockerInfo
}

export const handlers = {
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
  ...wifiHandlers,
  ...bluetoothHandlers,
  ...dockerHandlers
}

export type Handlers = typeof handlers