import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import { getCpuData } from "./cpuSlice";

export const Cpu = () => {
  const dispatch = useAppDispatch();
  const cpuData = useAppSelector(root => root.cpu.cpuData);

  useEffect(() => {
    dispatch(getCpuData());
  }, [])

  return (<Carpet>

    <DetailCard label="CPU">
      <Detail label="Manufacturer" value={cpuData?.manufacturer} />
      <Detail label="Brand" value={cpuData?.brand} />
      <Detail label="Speed" value={cpuData?.speed} />
      <Detail label="Min speed" value={cpuData?.speedMin} />
      <Detail label="Max speed" value={cpuData?.speedMax} />
      <Detail label="# cores" value={cpuData?.cores} />
      <Detail label="# physical Cores" value={cpuData?.physicalCores} />
      <Detail label="# processors" value={cpuData?.processors} />
      <Detail label="Socket" value={cpuData?.socket} />
      <Detail label="vendor ID" value={cpuData?.vendor} />
      <Detail label="Family" value={cpuData?.family} />
      <Detail label="Model" value={cpuData?.model} />
      <Detail label="Stepping" value={cpuData?.stepping} />
      <Detail label="Revision" value={cpuData?.revision} />
      <Detail label="Flags" value={cpuData?.flags} />
      <Detail label="Supports virtualization" value={JSON.stringify(cpuData?.virtualization)} />
      <Detail label="L1D size(bytes)" value={cpuData?.cache.l1d} />
      <Detail label="L1I size(bytes)" value={cpuData?.cache.l1i} />
      <Detail label="L2 size(bytes)" value={cpuData?.cache.l2} />
      <Detail label="L3 size(bytes)" value={cpuData?.cache.l3} />
    </DetailCard>

  </Carpet>
)
}