import React from "react";
import { ProcessusList } from "src/routes/processus/processusList";
import { PROCESSUS_LIST_URL } from "src/routes/processus/constants";
import { SYSTEM_URL } from "src/routes/system/constants";
import { System } from "src/routes/system/system";
import { OS_URL } from "src/routes/os/constants";
import { Os } from "src/routes/os/os";
import { GRAPHICS_URL } from "src/routes/graphics/constants";
import { Graphics } from "src/routes/graphics/graphics";
import { CPU_URL } from "src/routes/cpu/constants";
import { Cpu } from "src/routes/cpu/cpu";
import { AUDIO_URL } from "src/routes/audio/constants";
import { Audio } from "src/routes/audio/audio";
import { BATTERY_URL } from "src/routes/battery/constants";
import { Battery } from "src/routes/battery/battery";

export const routes = [
  { path: PROCESSUS_LIST_URL, component: <ProcessusList /> },
  { path: SYSTEM_URL, component: <System />}, 
  { path: OS_URL, component: <Os />},
  { path: GRAPHICS_URL, component: <Graphics />},
  { path: CPU_URL, component: <Cpu /> },
  { path: AUDIO_URL, component: <Audio />},
  { path: BATTERY_URL, component: <Battery />}
];
