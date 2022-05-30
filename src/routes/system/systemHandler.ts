import SI from 'systeminformation';

export type SystemData = SI.Systeminformation.SystemData;

export const systemHandler: () => Promise<SystemData> = () => {
  return SI.system();
};

export type UuidData = SI.Systeminformation.UuidData;

export const uuidsHandler: () => Promise<UuidData> = () => {
  return SI.uuid();
};

export type BiosData = SI.Systeminformation.BiosData;

export const biosHandler: () => Promise<BiosData> = () => {
  return SI.bios();
};

export type BaseboardData = SI.Systeminformation.BaseboardData;

export const baseboardHandler: () => Promise<BaseboardData> = () => {
  return SI.baseboard();
};

export type ChassisData = SI.Systeminformation.ChassisData;

export const chassisHandler: () => Promise<ChassisData> = () => {
  return SI.chassis();
};
