import SI from 'systeminformation';

export type CurrentLoad = SI.Systeminformation.CurrentLoadData;

export const processusListHandler = async (): Promise<CurrentLoad> => {
  const data = await SI.currentLoad();
  return data;
};

export const currentLoadHandler: () => Promise<CurrentLoad> = SI.currentLoad;
