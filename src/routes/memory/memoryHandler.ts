import SI from 'systeminformation';

export type MemoryData = SI.Systeminformation.MemData

export const memoryHandler : () => Promise<MemoryData> = () => {
  return SI.mem();
}

export type MemoryLayoutData = SI.Systeminformation.MemLayoutData[]

export const memoryLayoutHandler : () => Promise<MemoryLayoutData> = () => {
  return SI.memLayout();
}