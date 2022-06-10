import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Memory = () => {
  const memory = useQuery('memory', window.invoke.memory);
  const memLayout = useQuery('memory_layout', window.invoke.memory_layout)

  return (<Carpet>

    <DetailCard label="Memory">
      <Detail label="Total (bytes)" value={memory?.data?.total} />
      <Detail label="Free" value={memory?.data?.free} />
      <Detail label="Used" value={memory?.data?.used} />
      <Detail label="Used actively" value={memory?.data?.active} />
      <Detail label="Used by buffer & cache" value={memory?.data?.buffcache} />
      <Detail label="Available" value={memory?.data?.available} />
      <Detail label="Swap total" value={memory?.data?.swaptotal} />
      <Detail label="Swap used" value={memory?.data?.swapused} />
      <Detail label="Swap free" value={memory?.data?.swapfree} />
    </DetailCard>

    <h2>Memory Layout</h2>

    <>
    {memLayout?.data && memLayout.data.map(m => (
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

export const MEMORY_URL = '/memory';