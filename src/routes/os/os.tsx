import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import {
  getOsData, getVersionData
} from './osSlice';

export const Os = () => {

  const osData = useAppSelector(root => root.os.data);
  const versionsData = useAppSelector(root => root.os.versions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOsData());
    dispatch(getVersionData());
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

  </Carpet>
)
}