import SI from 'systeminformation';

export const wifiNetworks = () => {
  return SI.wifiNetworks()
}

export const wifiConnections = () => {
  return SI.wifiConnections()
}

export const wifiInterfaces = () => {
  return SI.wifiInterfaces()
}