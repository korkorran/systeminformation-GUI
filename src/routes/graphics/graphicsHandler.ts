import SI from 'systeminformation';

export type GraphicsData = SI.Systeminformation.GraphicsData;

export const graphicsHandler: () => Promise<GraphicsData> = () => {
  return SI.graphics();
};
