import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
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

    <h2>OS</h2>

      <div >
        <p>Platform : {osData?.platform}</p>
        <p>Distro : {osData?.distro}</p>
        <p>Release : {osData?.release}</p>
        <p>Kernel : {osData?.kernel}</p>
        <p>Arch : {osData?.arch}</p>
        <p>Hostname: {osData?.hostname}</p>
        <p>Fully Qualified Domain Name : {osData?.fqdn}</p>
        <p>Codepage : {osData?.codepage}</p>
        <p>Logofile : {osData?.logofile}</p>
        <p>Serial Number : {osData?.serial}</p>
        <p>UEFI : {JSON.stringify(osData?.uefi)}</p>
        <p>Shell : {osData?.shell}</p>
      </div>

    <h2>Software Versions</h2>

    <div>
      <p>Kernel : {versionsData?.kernel}</p>
      <p>Node OpenSSL : {versionsData?.openssl}</p>
      <p>OS OpenSSL : {versionsData?.systemOpenssl}</p>
      <p>OpenSSL Lib : {versionsData?.systemOpensslLib}</p>
      <p>Git : {versionsData?.git}</p>
      <hr/>
      <p>Node : {versionsData?.node}</p>
      <p>v8 : {versionsData?.v8}</p>
      <p>npm : {versionsData?.npm}</p>
      <p>yarn : {versionsData?.yarn}</p>
      <p>pm2 : {versionsData?.pm2}</p>
      <p>Gulp : {versionsData?.gulp}</p>
      <p>Grunt : {versionsData?.grunt}</p>
      <p>TypeScript : {versionsData?.tsc}</p>
      <hr/>
      <p>MySQL : {versionsData?.mysql}</p>
      <p>Redis : {versionsData?.redis}</p>
      <p>MongoDB : {versionsData?.mongodb}</p>
      <p>Postgres : {versionsData?.postgresql}</p>
      <hr/>
      {/* <p>Apache :</p> */}
      <p>NGINX : {versionsData?.nginx}</p>
      <p>Postfix : {versionsData?.postfix}</p>
      <hr/>
      <p>Php : {versionsData?.php}</p>
      <p>Perl : {versionsData?.perl}</p>
      <p>Python : {versionsData?.python}</p>
      <p>Python3 : {versionsData?.python3}</p>
      <p>Java : {versionsData?.java}</p>
      <p>Gcc : {versionsData?.gcc}</p>
      <p>.NET : {versionsData?.dotnet}</p>
      <hr/>
      <p>Docker : {versionsData?.docker}</p>
      <p>Virtual Box : {versionsData?.virtualbox}</p>
      <hr/>
      {/* <p>Bash : {versionsData?.bash}</p> */}
      {/* <p>Zsh : {versionsData?.zsh}</p> */}
      {/* <p>Fish : {versionsData?.fish}</p> */}
      {/* <p>PowerShell : {versionsData?.powershell}</p> */}

    </div>

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
        <tr>
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