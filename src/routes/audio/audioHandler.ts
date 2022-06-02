import SI from 'systeminformation';

export type AudioData = SI.Systeminformation.AudioData[]

export const audioHandler : () => Promise<AudioData> = () => {
  return SI.audio();
}