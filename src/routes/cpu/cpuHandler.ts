import SI from 'systeminformation';

export type CpuData = SI.Systeminformation.CpuData;

export const cpuHandler: () => Promise<CpuData> = () => {
  return SI.cpu();
};
