import React from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const System = () => {
  const system = useQuery('system', window.invoke.system);
  const uuid = useQuery('uuids', window.invoke.uuids);
  const bios = useQuery('bios', window.invoke.bios);
  const baseboard = useQuery('baseboard', window.invoke.baseboard);
  const chassis = useQuery('chassis', window.invoke.chassis);

  return (<Carpet>


    <DetailCard label="System" >
      <Detail label="Manufacturer" value={system?.data?.manufacturer} />
      <Detail label="Model" value={system?.data?.model} />
      <Detail label="Version" value={system?.data?.version} />
      <Detail label="Serial Number" value={system?.data?.serial} />
      <Detail label="UUID" value={system?.data?.uuid} />
      <Detail label="SKU" value={system?.data?.sku} />
      <Detail label="Virtual Machine" value={system?.data?.virtual} />
    </DetailCard>

    <DetailCard label="UUIDs" >
      <Detail label="OS" value={uuid?.data?.os} />
      <Detail label="Hardware" value={uuid?.data?.hardware} />
      <Detail label="Macs" value={JSON.stringify(uuid?.data?.macs)} />
    </DetailCard>

    <DetailCard label="BIOS" >
      <Detail label="Vendor" value={bios?.data?.vendor} />
      <Detail label="Version" value={bios?.data?.version} />
      <Detail label="Release Date" value={bios?.data?.releaseDate} />
      <Detail label="Revision" value={bios?.data?.revision} />
      <Detail label="Serial" value={bios?.data?.serial} />
      <Detail label="Language" value={bios?.data?.language} />
      <Detail label="Features" value={JSON.stringify(bios?.data?.features)} />
    </DetailCard>

    <DetailCard label="Baseboard" >
      <Detail label="Manufacturer" value={baseboard?.data?.manufacturer} />
      <Detail label="Model" value={baseboard?.data?.model} />
      <Detail label="Version" value={baseboard?.data?.version} />
      <Detail label="Serial Number" value={baseboard?.data?.serial} />
      <Detail label="Asset Tag" value={baseboard?.data?.assetTag} />
      <Detail label="Memory max capacity bytes" value={baseboard?.data?.memMax} />
      <Detail label="Number of memory slots" value={baseboard?.data?.memSlots} />
    </DetailCard> 

    <DetailCard label="Chassis" >
      <Detail label="Manufacturer" value={chassis?.data?.manufacturer} />
      <Detail label="Model" value={chassis?.data?.model} />
      <Detail label="Type" value={chassis?.data?.type} />
      <Detail label="Version" value={chassis?.data?.version} />
      <Detail label="Serial Number" value={chassis?.data?.serial} />
      <Detail label="Asset Tag" value={chassis?.data?.assetTag} />
      <Detail label="SKU" value={chassis?.data?.sku} />
    </DetailCard>

  </Carpet>
)
}

export const SYSTEM_URL = '/';