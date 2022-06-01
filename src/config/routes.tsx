import React from "react";
import { ProcessusList } from "src/routes/processus/processusList";
import { PROCESSUS_LIST_URL } from "src/routes/processus/constants";
import { SYSTEM_URL } from "src/routes/system/constants";
import { System } from "src/routes/system/system";
import { OS_URL } from "src/routes/os/constants";
import { Os } from "src/routes/os/os";
import { GRAPHICS_URL } from "src/routes/graphics/constants";
import { Graphics } from "src/routes/graphics/graphics";

export const routes = [
  { path: PROCESSUS_LIST_URL, component: <ProcessusList /> },
  { path: SYSTEM_URL, component: <System />}, 
  { path: OS_URL, component: <Os />},
  { path: GRAPHICS_URL, component: <Graphics />}
];
