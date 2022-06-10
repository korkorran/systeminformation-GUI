import { AUDIO_URL } from 'src/routes/audio/audio';
import { BATTERY_URL } from 'src/routes/battery/battery';
import { BLUETOOTH_URL } from 'src/routes/bluetooth/bluetooth';
import { CPU_URL } from 'src/routes/cpu/cpu';
import { DOCKER_URL } from 'src/routes/docker/docker';
import { GRAPHICS_URL } from 'src/routes/graphics/graphics';
import { MEMORY_URL } from 'src/routes/memory/memory';
import { NETWORK_URL } from 'src/routes/network/network';
import { OS_URL } from 'src/routes/os/os';
import { PRINTER_URL } from 'src/routes/printer/printer';
import { SYSTEM_URL } from 'src/routes/system/system';
import { USB_URL } from 'src/routes/usb/usb';
import { WIFI_URL } from 'src/routes/wifi/wifi';

export const SIDEBAR_LINK_GRAPHICS = {
  icon: 'bi-arrow-down-right-square-fill',
  label: 'Graphics',
  url: GRAPHICS_URL
};

export const SIDEBAR_LINK_SYSTEM = {
  icon: 'bi-asterisk',
  label: 'System',
  url: SYSTEM_URL
};

export const SIDEBAR_LINK_OS = {
  icon: 'bi-gear-fill',
  label: 'Os',
  url: OS_URL
};

export const SIDEBAR_LINK_CPU = {
  icon: 'bi-gear-fill',
  label: 'Cpu',
  url: CPU_URL
};

export const SIDEBAR_LINK_AUDIO = {
  icon: 'bi-gear-fill',
  label: 'Audio',
  url: AUDIO_URL
};

export const SIDEBAR_LINK_BATTERY = {
  icon: 'bi-gear-fill',
  label: 'Battery',
  url: BATTERY_URL
};

export const SIDEBAR_LINK_MEMORY = {
  icon: 'bi-gear-fill',
  label: 'Memory',
  url: MEMORY_URL
};

export const SIDEBAR_LINK_USB = {
  icon: 'bi-gear-fill',
  label: 'Usb',
  url: USB_URL
};

export const SIDEBAR_LINK_PRINTER = {
  icon: 'bi-gear-fill',
  label: 'Printer',
  url: PRINTER_URL
};

export const SIDEBAR_LINK_NETWORK = {
  icon: 'bi-gear-fill',
  label: 'Network',
  url: NETWORK_URL
};

export const SIDEBAR_LINK_WIFI = {
  icon: 'bi-gear-fill',
  label: 'Wifi',
  url: WIFI_URL
};

export const SIDEBAR_LINK_BLUETOOTH = {
  icon: 'bi-gear-fill',
  label: 'Bluetooth',
  url: BLUETOOTH_URL
};

export const SIDEBAR_LINK_DOCKER = {
  icon: 'bi-gear-fill',
  label: 'Docker',
  url: DOCKER_URL
};


export const links = [
  SIDEBAR_LINK_SYSTEM,
  SIDEBAR_LINK_OS,
  SIDEBAR_LINK_GRAPHICS,
  SIDEBAR_LINK_CPU,
  SIDEBAR_LINK_AUDIO,
  SIDEBAR_LINK_BATTERY,
  SIDEBAR_LINK_MEMORY,
  SIDEBAR_LINK_USB,
  SIDEBAR_LINK_PRINTER,
  SIDEBAR_LINK_NETWORK,
  SIDEBAR_LINK_WIFI,
  SIDEBAR_LINK_BLUETOOTH,
  SIDEBAR_LINK_DOCKER,
];
