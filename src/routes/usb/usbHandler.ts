import SI from 'systeminformation';

export type UsbData = SI.Systeminformation.UsbData[];

export const usbHandler: () => Promise<UsbData> = () => {
  return SI.usb();
};
