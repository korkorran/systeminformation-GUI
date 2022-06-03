import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import { getNetworkInterfacesData } from "./networkSlice";

export const Network = () => {
  const dispatch = useAppDispatch();
  const networkInterfacesData = useAppSelector(root => root.network.networkInterfacesData);

  useEffect(() => {
    dispatch(getNetworkInterfacesData());
  }, [])

  return (<Carpet>
    <h2>Network Interfaces</h2>

<>
    {networkInterfacesData && networkInterfacesData.map((i, index) => (
      <DetailCard label={i.iface} key={index}>
        <Detail label="Interface name" value={i.ifaceName} />
        {/* <Detail label="Default" value={i.} /> */}
        <Detail label="IP4 address" value={i.ip4} />
        <Detail label="IP4 subnet mask" value={i.ip4subnet} />
        <Detail label="IP6 address" value={i.ip6} />
        <Detail label="IP6 subnet mask" value={i.ip6subnet} />
        <Detail label="MAC address" value={i.mac} />
        <Detail label="Internal" value={i.internal} />
        <Detail label="Virtual" value={i.virtual} />
        <Detail label="operstate" value={i.operstate} />
        <Detail label="type" value={i.type} />
        <Detail label="duplex" value={i.duplex} />
        <Detail label="Maximum Transmission Unit" value={i.mtu} />
        <Detail label="Speed (Mbit/s)" value={i.speed} />
        <Detail label="DHCP IP address" value={i.dhcp} />
        <Detail label="DNS suffix" value={i.dnsSuffix} />
        <Detail label="IEEE 802.1x Auth" value={i.ieee8021xAuth} />
        <Detail label="IEEE 802.1x State" value={i.ieee8021xState} />
        <Detail label="# changes up/down" value={i.carrierChanges} />
      </DetailCard>
    ))}

    </>
  </Carpet>
)
}