import SI from 'systeminformation';

export type NetworkInterfacesData =
  SI.Systeminformation.NetworkInterfacesData[];

export const networkInterfaceHandler: () => Promise<NetworkInterfacesData> =
  () => {
    return SI.networkInterfaces();
  };
