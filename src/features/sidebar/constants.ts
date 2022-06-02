import { AUDIO_URL } from 'src/routes/audio/constants';
import { CPU_URL } from 'src/routes/cpu/constants';
import { GRAPHICS_URL } from 'src/routes/graphics/constants';
import { OS_URL } from 'src/routes/os/constants';
import { PROCESSUS_LIST_URL } from 'src/routes/processus/constants';
import { SYSTEM_URL } from 'src/routes/system/constants';

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

export const links = [
  SIDEBAR_LINK_SYSTEM,
  SIDEBAR_LINK_OS,
  SIDEBAR_LINK_GRAPHICS,
  SIDEBAR_LINK_CPU,
  SIDEBAR_LINK_AUDIO
];
