import SI from 'systeminformation';

export type PrinterData = SI.Systeminformation.PrinterData[];

export const printerHandler: () => Promise<PrinterData> = () => {
  return SI.printer();
};
