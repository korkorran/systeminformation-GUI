import SI from 'systeminformation';

export type OsData = SI.Systeminformation.OsData;

export const osHandler: () => Promise<OsData> = () => {
  return SI.osInfo();
};
