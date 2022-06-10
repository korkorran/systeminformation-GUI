import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Bluetooth = () => {

  const bluetooth = useQuery('bluetooth', window.invoke.bluetooth_devices)

  return (<Carpet>
    <h2>Bluetooth devices</h2>

<>
    {bluetooth?.data && bluetooth.data.map((d, i) => (
      <DetailCard label={d.name} key={i}>
        <Detail label="Device name" value={d.device} />
        <Detail label="Manufacturer" value={d.manufacturer} />
        <Detail label="MAC adress device" value={d.macDevice} />
        <Detail label="MAC adress host" value={d.macHost} />
        <Detail label="Battery level (%)" value={d.batteryPercent} />
        <Detail label="Type" value={d.type} />
        <Detail label="Connected" value={d.connected} />
      </DetailCard>
    ))}

    </>
  </Carpet>
)
}

export const BLUETOOTH_URL = '/bluetooth';