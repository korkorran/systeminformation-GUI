import React from "react";
import { ProcessusList } from "src/routes/processus/processusList";
import { PROCESSUS_LIST_URL } from "src/routes/processus/constants";
import { System, SYSTEM_URL } from "src/routes/system/system";
import { Os, OS_URL } from "src/routes/os/os";
import { Graphics, GRAPHICS_URL } from "src/routes/graphics/graphics";
import { Cpu, CPU_URL } from "src/routes/cpu/cpu";
import { Audio, AUDIO_URL } from "src/routes/audio/audio";
import { Battery, BATTERY_URL } from "src/routes/battery/battery";
import { Memory, MEMORY_URL } from "src/routes/memory/memory";
import { Usb, USB_URL } from "src/routes/usb/usb";
import { Printer, PRINTER_URL } from "src/routes/printer/printer";
import { Network, NETWORK_URL } from "src/routes/network/network";
import { Wifi, WIFI_URL } from "src/routes/wifi/wifi";

export const routes = [
  { path: PROCESSUS_LIST_URL, component: <ProcessusList /> },
  { path: SYSTEM_URL, component: <System />}, 
  { path: OS_URL, component: <Os />},
  { path: GRAPHICS_URL, component: <Graphics />},
  { path: CPU_URL, component: <Cpu /> },
  { path: AUDIO_URL, component: <Audio />},
  { path: BATTERY_URL, component: <Battery />},
  { path: MEMORY_URL, component: <Memory />},
  { path: USB_URL, component: <Usb />},
  { path: PRINTER_URL, component: <Printer />},
  { path: NETWORK_URL, component: <Network />},
  { path: WIFI_URL, component: <Wifi />}
];
