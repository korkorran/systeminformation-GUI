import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import { getBatteryData } from "./batterySlice";

export const Battery = () => {
  const dispatch = useAppDispatch();
  const batteryData = useAppSelector(root => root.battery.batteryData);

  useEffect(() => {
    dispatch(getBatteryData());
  }, [])

  return (<Carpet>

    <DetailCard label="Battery">
      <Detail label="Has Battery" value={batteryData?.hasBattery} />
      <Detail label="Cycle Count" value={batteryData?.cycleCount} />
      <Detail label="is charging" value={batteryData?.isCharging} />
      <Detail label="designed capacity" value={batteryData?.designedCapacity} />
      <Detail label="max capacity" value={batteryData?.maxCapacity} />
      <Detail label="current capacity" value={batteryData?.currentCapacity} />
      <Detail label="capacity Unit" value={batteryData?.capacityUnit} />
      <Detail label="Voltage" value={batteryData?.voltage} />
      <Detail label="percent" value={batteryData?.percent} />
      <Detail label="Time remaining" value={batteryData?.timeRemaining} />
      <Detail label="AC connected" value={batteryData?.acConnected} />
      <Detail label="type" value={batteryData?.type} />
      <Detail label="model" value={batteryData?.model} />
      <Detail label="Manufacturer" value={batteryData?.manufacturer} />
      <Detail label="Serial" value={batteryData?.serial} />
    </DetailCard>

  </Carpet>
)
}