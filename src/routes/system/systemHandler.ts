import SI from 'systeminformation';

export type SystemData = SI.Systeminformation.SystemData;

export const systemHandler: () => Promise<SystemData> = () => {
  return SI.system();
};
