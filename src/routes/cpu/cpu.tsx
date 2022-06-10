import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Cpu = () => {
  const cpu = useQuery('cpu', window.invoke.cpu)

  return (<Carpet>

    <DetailCard label="CPU">
      <Detail label="Manufacturer" value={cpu?.data?.manufacturer} />
      <Detail label="Brand" value={cpu?.data?.brand} />
      <Detail label="Speed" value={cpu?.data?.speed} />
      <Detail label="Min speed" value={cpu?.data?.speedMin} />
      <Detail label="Max speed" value={cpu?.data?.speedMax} />
      <Detail label="# cores" value={cpu?.data?.cores} />
      <Detail label="# physical Cores" value={cpu?.data?.physicalCores} />
      <Detail label="# processors" value={cpu?.data?.processors} />
      <Detail label="Socket" value={cpu?.data?.socket} />
      <Detail label="vendor ID" value={cpu?.data?.vendor} />
      <Detail label="Family" value={cpu?.data?.family} />
      <Detail label="Model" value={cpu?.data?.model} />
      <Detail label="Stepping" value={cpu?.data?.stepping} />
      <Detail label="Revision" value={cpu?.data?.revision} />
      <Detail label="Flags" value={cpu?.data?.flags} />
      <Detail label="Supports virtualization" value={cpu?.data?.virtualization} />
      <Detail label="L1D size(bytes)" value={cpu?.data?.cache.l1d} />
      <Detail label="L1I size(bytes)" value={cpu?.data?.cache.l1i} />
      <Detail label="L2 size(bytes)" value={cpu?.data?.cache.l2} />
      <Detail label="L3 size(bytes)" value={cpu?.data?.cache.l3} />
    </DetailCard>

  </Carpet>
)
}

export const CPU_URL = '/cpu';