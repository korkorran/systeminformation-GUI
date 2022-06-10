import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Os = () => {

  const os = useQuery('os', window.invoke.os);
  const versions = useQuery('software_versions', window.invoke.software_versions);
  const users = useQuery('users', window.invoke.users);

  return (<Carpet>

    <DetailCard label="OS">
        <Detail label="Platform" value={os?.data?.platform} />
        <Detail label="Distribution" value={os?.data?.distro} />
        <Detail label="Release" value={os?.data?.release} />
        <Detail label="Kernel" value={os?.data?.kernel} />
        <Detail label="Architecture" value={os?.data?.arch} />
        <Detail label="Hostname" value={os?.data?.hostname} />
        <Detail label="Fully Qualified Domain Name" value={os?.data?.fqdn} />
        <Detail label="Codepage" value={os?.data?.codepage} />
        <Detail label="Logofile" value={os?.data?.logofile} />
        <Detail label="Serial Number" value={os?.data?.serial} />
        <Detail label="UEFI" value={JSON.stringify(os?.data?.uefi)} />
        <Detail label="Shell" value={os?.data?.shell} />
    </DetailCard>

    <DetailCard label="Software versions / Basic" >
      <Detail label="Kernel" value={versions?.data?.kernel} />
      <Detail label="OpenSSL" value={versions?.data?.openssl} />
      <Detail label="OS OpenSSL" value={versions?.data?.systemOpenssl} />
      <Detail label="OpenSSL Lib" value={versions?.data?.systemOpensslLib} />
      <Detail label="Git" value={versions?.data?.git} />
    </DetailCard>

    <DetailCard label="Software versions / Javascript">
      <Detail label="Node" value={versions?.data?.node} />
      <Detail label="v8" value={versions?.data?.v8} />
      <Detail label="npm" value={versions?.data?.npm} />
      <Detail label="yarn" value={versions?.data?.yarn} />
      <Detail label="pm2" value={versions?.data?.pm2} />
      <Detail label="Gulp" value={versions?.data?.gulp} />
      <Detail label="Grunt" value={versions?.data?.grunt} />
      <Detail label="TypeScript" value={versions?.data?.tsc} />
    </DetailCard>
    
    <DetailCard label="Software versions / Databases" >
      <Detail label="MySQL" value={versions?.data?.mysql} />
      <Detail label="Redis" value={versions?.data?.redis} />
      <Detail label="MongoDB" value={versions?.data?.mongodb} />
      <Detail label="Postgres" value={versions?.data?.postgresql} />
      <Detail label="NGINX" value={versions?.data?.nginx} />
      <Detail label="Postfix" value={versions?.data?.postfix} />
    </DetailCard>
      {/* <p>Apache :</p> */}
    <DetailCard label="Software versions / Languages">
      <Detail label="Php" value={versions?.data?.php} />
      <Detail label="Perl" value={versions?.data?.perl} />
      <Detail label="Python" value={versions?.data?.python} />
      <Detail label="Python3" value={versions?.data?.python3} />
      <Detail label="Java" value={versions?.data?.java} />
      <Detail label="Gcc" value={versions?.data?.gcc} />
      <Detail label=".NET" value={versions?.data?.dotnet} />
    </DetailCard>
    <DetailCard label="Software versions / virtualization">
      <Detail label="Docker" value={versions?.data?.docker} />
      <Detail label="Virtual Box" value={versions?.data?.virtualbox} />
    </DetailCard>
      {/* <p>Bash : {versions?.data?.bash}</p> */}
      {/* <p>Zsh : {versions?.data?.zsh}</p> */}
      {/* <p>Fish : {versions?.data?.fish}</p> */}
      {/* <p>PowerShell : {versions?.data?.powershell}</p> */}


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
        {users?.data && users.data.map((user, index) => (
        <tr key={index}>
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

export const OS_URL = '/os';