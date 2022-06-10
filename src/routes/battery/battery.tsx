import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Battery = () => {
  const battery = useQuery('battery', window.invoke.battery)

  return (<Carpet>

    <DetailCard label="Battery">
      <Detail label="Has Battery" value={battery?.data?.hasBattery} />
      <Detail label="Cycle Count" value={battery?.data?.cycleCount} />
      <Detail label="is charging" value={battery?.data?.isCharging} />
      <Detail label="designed capacity" value={battery?.data?.designedCapacity} />
      <Detail label="max capacity" value={battery?.data?.maxCapacity} />
      <Detail label="current capacity" value={battery?.data?.currentCapacity} />
      <Detail label="capacity Unit" value={battery?.data?.capacityUnit} />
      <Detail label="Voltage" value={battery?.data?.voltage} />
      <Detail label="percent" value={battery?.data?.percent} />
      <Detail label="Time remaining" value={battery?.data?.timeRemaining} />
      <Detail label="AC connected" value={battery?.data?.acConnected} />
      <Detail label="type" value={battery?.data?.type} />
      <Detail label="model" value={battery?.data?.model} />
      <Detail label="Manufacturer" value={battery?.data?.manufacturer} />
      <Detail label="Serial" value={battery?.data?.serial} />
    </DetailCard>

  </Carpet>
)
}

export const BATTERY_URL = '/battery';