import SI from 'systeminformation';

export type OsData = SI.Systeminformation.OsData & { shell: string };

export const osHandler: () => Promise<OsData> = async () => {
  const data = await SI.osInfo();
  const shell = await SI.shell();
  return { ...data, shell };
};

export type VersionData = SI.Systeminformation.VersionData;

export const softwareVersionsHandler = () => {
  return SI.versions();
};

export type UsersData = SI.Systeminformation.UserData[];

export const usersHandler: () => Promise<UsersData> = () => {
  return SI.users();
};
