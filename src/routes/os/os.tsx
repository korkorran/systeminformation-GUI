import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import {
  getOsData, getUsersData, getVersionData
} from './osSlice';

export const Os = () => {
  const dispatch = useAppDispatch();
  const osData = useAppSelector(root => root.os.osData);
  const versionsData = useAppSelector(root => root.os.versionsData);
  const usersData = useAppSelector(root => root.os.usersData)

  useEffect(() => {
    dispatch(getOsData());
    dispatch(getVersionData());
    dispatch(getUsersData());
  }, [])

  return (<Carpet>

    <DetailCard label="OS">
        <Detail label="Platform" value={osData?.platform} />
        <Detail label="Distribution" value={osData?.distro} />
        <Detail label="Release" value={osData?.release} />
        <Detail label="Kernel" value={osData?.kernel} />
        <Detail label="Architecture" value={osData?.arch} />
        <Detail label="Hostname" value={osData?.hostname} />
        <Detail label="Fully Qualified Domain Name" value={osData?.fqdn} />
        <Detail label="Codepage" value={osData?.codepage} />
        <Detail label="Logofile" value={osData?.logofile} />
        <Detail label="Serial Number" value={osData?.serial} />
        <Detail label="UEFI" value={JSON.stringify(osData?.uefi)} />
        <Detail label="Shell" value={osData?.shell} />
    </DetailCard>

    <DetailCard label="Software versions / Basic" >
      <Detail label="Kernel" value={versionsData?.kernel} />
      <Detail label="OpenSSL" value={versionsData?.openssl} />
      <Detail label="OS OpenSSL" value={versionsData?.systemOpenssl} />
      <Detail label="OpenSSL Lib" value={versionsData?.systemOpensslLib} />
      <Detail label="Git" value={versionsData?.git} />
    </DetailCard>

    <DetailCard label="Software versions / Javascript">
      <Detail label="Node" value={versionsData?.node} />
      <Detail label="v8" value={versionsData?.v8} />
      <Detail label="npm" value={versionsData?.npm} />
      <Detail label="yarn" value={versionsData?.yarn} />
      <Detail label="pm2" value={versionsData?.pm2} />
      <Detail label="Gulp" value={versionsData?.gulp} />
      <Detail label="Grunt" value={versionsData?.grunt} />
      <Detail label="TypeScript" value={versionsData?.tsc} />
    </DetailCard>
    
    <DetailCard label="Software versions / Databases" >
      <Detail label="MySQL" value={versionsData?.mysql} />
      <Detail label="Redis" value={versionsData?.redis} />
      <Detail label="MongoDB" value={versionsData?.mongodb} />
      <Detail label="Postgres" value={versionsData?.postgresql} />
      <Detail label="NGINX" value={versionsData?.nginx} />
      <Detail label="Postfix" value={versionsData?.postfix} />
    </DetailCard>
      {/* <p>Apache :</p> */}
    <DetailCard label="Software versions / Languages">
      <Detail label="Php" value={versionsData?.php} />
      <Detail label="Perl" value={versionsData?.perl} />
      <Detail label="Python" value={versionsData?.python} />
      <Detail label="Python3" value={versionsData?.python3} />
      <Detail label="Java" value={versionsData?.java} />
      <Detail label="Gcc" value={versionsData?.gcc} />
      <Detail label=".NET" value={versionsData?.dotnet} />
    </DetailCard>
    <DetailCard label="Software versions / virtualization">
      <Detail label="Docker" value={versionsData?.docker} />
      <Detail label="Virtual Box" value={versionsData?.virtualbox} />
    </DetailCard>
      {/* <p>Bash : {versionsData?.bash}</p> */}
      {/* <p>Zsh : {versionsData?.zsh}</p> */}
      {/* <p>Fish : {versionsData?.fish}</p> */}
      {/* <p>PowerShell : {versionsData?.powershell}</p> */}


    <h2>Users</h2>

    <table className="table">
      <thead>
        <tr>
        <th scope="col">User Name</th>
        <th scope="col">Terminal</th>
        <th scope="col">Login Date</th>
        <th scope="col">Login Time</th>
        <th scope="col">IP address</th>
        <th scope="col">Last command</th>
        </tr>
      </thead>
      <tbody>
        {usersData && usersData.map(user => (
        <tr key={user.user}>
          <th scope="row">{user.user}</th>
          <td>{user.tty}</td>
          <td>{user.date}</td>
          <td>{user.time}</td>
          <td>{user.ip}</td>
          <td>{user.command}</td>
        </tr>
          ))}
      </tbody>

    </table>

  </Carpet>
)
}