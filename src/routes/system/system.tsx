import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import {
  getBaseboardData,
  getBiosData,
  getChassisData,
  getSystemData, getUuidData
} from './systemSlice';

export const System = () => {
  const dispatch = useAppDispatch();
  const systemData = useAppSelector(root => root.system.systemData);
  const uuidData = useAppSelector(root => root.system.uuidData);
  const biosData = useAppSelector(root => root.system.biosData);
  const baseboardData = useAppSelector(root => root.system.baseboardData);
  const chassisData = useAppSelector(root => root.system.chassisData);

  useEffect(() => {
    dispatch(getSystemData());
    dispatch(getUuidData());
    dispatch(getBiosData());
    dispatch(getBaseboardData());
    dispatch(getChassisData());
  }, [])

  return (<Carpet>

    <h2>System</h2>

      <div >
        <p>Manufacturer : {systemData?.manufacturer}</p>
        <p>Model : {systemData?.model}</p>
        <p>Version : {systemData?.version}</p>
        <p>Serial Number : {systemData?.serial}</p>
        <p>UUID : {systemData?.uuid}</p>
        <p>SKU : {systemData?.sku}</p>
        <p>Virtual Machine : {JSON.stringify(systemData?.virtual)}</p>
      </div>

    <h2>UUIDs</h2>

    <div>
      <p>OS : {uuidData?.os}</p>
      <p>Hardware : {uuidData?.hardware}</p>
      <p>Macs : {uuidData?.macs}</p>
    </div>

    <h2>BIOS</h2>

    <div>
      <p>Vendor : {biosData?.vendor}</p>
      <p>Version : {biosData?.version}</p>
      <p>Release Date : {biosData?.releaseDate}</p>
      <p>Revision : {biosData?.revision}</p>
      <p>Serial : {biosData?.serial}</p>
      <p>Language : {biosData?.language}</p>
      <p>Features : {JSON.stringify(biosData?.features)}</p>
    </div>
    
    <h2>Baseboard</h2>

    <div>
      <p>Manufacturer : {baseboardData?.manufacturer}</p>
      <p>Model : {baseboardData?.model}</p>
      <p>Version : {baseboardData?.version}</p>
      <p>Serial Number : {baseboardData?.serial}</p>
      <p>Asset Tag : {baseboardData?.assetTag}</p>
      <p>Memory max capacity bytes : {baseboardData?.memMax}</p>
      <p>Number of memory slots : {baseboardData?.memSlots}</p>
    </div>

    <h2>Chassis</h2>

    <div>
      <p>Manufacturer : {chassisData?.manufacturer}</p>
      <p>Model : {chassisData?.model}</p>
      <p>Type : {chassisData?.type}</p>
      <p>Version : {chassisData?.version}</p>
      <p>Serial Number : {chassisData?.serial}</p>
      <p>Asset Tag : {chassisData?.assetTag}</p>
      <p>SKU : {chassisData?.sku}</p>
    </div>

  </Carpet>
)
}