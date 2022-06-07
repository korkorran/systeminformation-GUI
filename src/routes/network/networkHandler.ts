import SI from 'systeminformation';

export type NetworkInterfacesData =
  SI.Systeminformation.NetworkInterfacesData[];

export const networkInterfaceHandler: () => Promise<NetworkInterfacesData> =
  () => {
    return SI.networkInterfaces();
  };

export type NetworkStatsData = SI.Systeminformation.NetworkStatsData[];

export const networkStatsHandler: () => Promise<NetworkStatsData> = () => {
  return SI.networkStats();
};

export type NetworkConnectionsData =
  SI.Systeminformation.NetworkConnectionsData[];

export const networkConnectionsHandler: () => Promise<NetworkConnectionsData> =
  () => {
    return SI.networkConnections();
  };
