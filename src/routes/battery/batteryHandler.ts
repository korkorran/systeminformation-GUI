import SI from 'systeminformation';

export type BatteryData = SI.Systeminformation.BatteryData;

export const batteryHandler: () => Promise<BatteryData> = () => {
  return SI.battery();
};
