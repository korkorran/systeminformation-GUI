import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
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


    <DetailCard label="System" >
      <Detail label="Manufacturer" value={systemData?.manufacturer} />
      <Detail label="Model" value={systemData?.model} />
      <Detail label="Version" value={systemData?.version} />
      <Detail label="Serial Number" value={systemData?.serial} />
      <Detail label="UUID" value={systemData?.uuid} />
      <Detail label="SKU" value={systemData?.sku} />
      <Detail label="Virtual Machine" value={JSON.stringify(systemData?.virtual)} />
    </DetailCard>

    <DetailCard label="UUIDs" >
      <Detail label="OS" value={uuidData?.os} />
      <Detail label="Hardware" value={uuidData?.hardware} />
      <Detail label="Macs" value={JSON.stringify(uuidData?.macs)} />
    </DetailCard>

    <DetailCard label="BIOS" >
      <Detail label="Vendor" value={biosData?.vendor} />
      <Detail label="Version" value={biosData?.version} />
      <Detail label="Release Date" value={biosData?.releaseDate} />
      <Detail label="Revision" value={biosData?.revision} />
      <Detail label="Serial" value={biosData?.serial} />
      <Detail label="Language" value={biosData?.language} />
      <Detail label="Features" value={JSON.stringify(biosData?.features)} />
    </DetailCard>

    <DetailCard label="Baseboard" >
      <Detail label="Manufacturer" value={baseboardData?.manufacturer} />
      <Detail label="Model" value={baseboardData?.model} />
      <Detail label="Version" value={baseboardData?.version} />
      <Detail label="Serial Number" value={baseboardData?.serial} />
      <Detail label="Asset Tag" value={baseboardData?.assetTag} />
      <Detail label="Memory max capacity bytes" value={baseboardData?.memMax} />
      <Detail label="Number of memory slots" value={baseboardData?.memSlots} />
    </DetailCard> 

    <DetailCard label="Chassis" >
      <Detail label="Manufacturer" value={chassisData?.manufacturer} />
      <Detail label="Model" value={chassisData?.model} />
      <Detail label="Type" value={chassisData?.type} />
      <Detail label="Version" value={chassisData?.version} />
      <Detail label="Serial Number" value={chassisData?.serial} />
      <Detail label="Asset Tag" value={chassisData?.assetTag} />
      <Detail label="SKU" value={chassisData?.sku} />
    </DetailCard>

  </Carpet>
)
}