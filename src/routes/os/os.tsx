import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import {
  getOsData
} from './osSlice';

export const Os = () => {

  const osData = useAppSelector(root => root.os.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOsData())
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
      </div>

  </Carpet>
)
}