import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import { getMemoryData, getMemoryLayoutData } from "./memorySlice";

export const Memory = () => {
  const dispatch = useAppDispatch();
  const memoryData = useAppSelector(root => root.memory.memoryData);
  const memLayoutData = useAppSelector(root => root.memory.memoryLayoutData);

  useEffect(() => {
    dispatch(getMemoryData());
    dispatch(getMemoryLayoutData());
  }, [])

  return (<Carpet>

    <DetailCard label="Memory">
      <Detail label="Total (bytes)" value={memoryData?.total} />
      <Detail label="Free" value={memoryData?.free} />
      <Detail label="Used" value={memoryData?.used} />
      <Detail label="Used actively" value={memoryData?.active} />
      <Detail label="Used by buffer & cache" value={memoryData?.buffcache} />
      <Detail label="Available" value={memoryData?.available} />
      <Detail label="Swap total" value={memoryData?.swaptotal} />
      <Detail label="Swap used" value={memoryData?.swapused} />
      <Detail label="Swap free" value={memoryData?.swapfree} />
    </DetailCard>

    <h2>Memory Layout</h2>

    <>
    {memLayoutData && memLayoutData.map(m => (
      <DetailCard label={m.bank} key={m.bank}>
        <Detail label="Size" value={m.size} />
        <Detail label="Type" value={m.type} />
        <Detail label="ECC memory" value={m.ecc} />
        <Detail label="Clock speed" value={m.clockSpeed} />
        <Detail label="Form factor" value={m.formFactor} />
        <Detail label="Manufacturer" value={m.manufacturer} />
        <Detail label="Part number" value={m.partNum} />
        <Detail label="Serial Number" value={m.serialNum} />
        <Detail label="Voltage configured" value={m.voltageConfigured} />
        <Detail label="Voltage min" value={m.voltageMin} />
        <Detail label="Voltage max" value={m.voltageMax} />
      </DetailCard>
    ))}

    </>

  </Carpet>
)
}