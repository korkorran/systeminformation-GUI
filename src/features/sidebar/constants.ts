import { PROCESSUS_LIST_URL } from 'src/routes/processus/constants';
import { SYSTEM_URL } from 'src/routes/system/constants';

export const SIDEBAR_LINK_STANDART = {
  icon: 'bi-arrow-down-right-square-fill',
  label: 'Standart',
  url: PROCESSUS_LIST_URL
};

export const SIDEBAR_LINK_SYSTEM = {
  icon: 'bi-asterisk',
  label: 'System',
  url: SYSTEM_URL
};

export const SIDEBAR_LINK_COUNTER = {
  icon: 'bi-gear-fill',
  label: 'Counter',
  url: '/counter'
};

export const links = [SIDEBAR_LINK_SYSTEM, SIDEBAR_LINK_STANDART];
