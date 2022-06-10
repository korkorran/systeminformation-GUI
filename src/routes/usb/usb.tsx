import React from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Usb = () => {
  const usb = useQuery('usb', window.invoke.usb);

  return (<Carpet>

    <h2>Usb devices</h2>

    <>
    {usb.data && usb.data.map((d, i) => (
      <DetailCard label={d.name} key={i}>
        <Detail label="ID" value={d.id} />
        <Detail label="Type" value={d.type} />
        <Detail label="Bus" value={d.bus} />
        <Detail label="Device ID" value={d.deviceId} />
        <Detail label="Removable" value={d.removable} />
        <Detail label="Vendor" value={d.vendor} />
        <Detail label="Manufacturer" value={d.manufacturer} />
        <Detail label="Max power" value={d.maxPower} />
        <Detail label="Serial number" value={d.serialNumber} />
      </DetailCard>
    ))}

    </>

  </Carpet>
)
}

export const USB_URL = '/usb';