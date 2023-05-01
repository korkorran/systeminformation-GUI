import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Network = () => {
  const networkInterfaces = useQuery('network_interfaces', window.invoke.network_interfaces)
  const networkStats = useQuery('network_stats', window.invoke.network_stats);
  const networkConnections = useQuery('network_connections', window.invoke.network_connections);

  return (<Carpet>
    <h2>Network Interfaces</h2>

<>
    {networkInterfaces?.data && !Array.isArray(networkInterfaces.data) && 
      <DetailCard label={networkInterfaces.data.iface}>
        <Detail label="Interface name" value={networkInterfaces.data.ifaceName} />
        {/* <Detail label="Default" value={i.} /> */}
        <Detail label="IP4 address" value={networkInterfaces.data.ip4} />
        <Detail label="IP4 subnet mask" value={networkInterfaces.data.ip4subnet} />
        <Detail label="IP6 address" value={networkInterfaces.data.ip6} />
        <Detail label="IP6 subnet mask" value={networkInterfaces.data.ip6subnet} />
        <Detail label="MAC address" value={networkInterfaces.data.mac} />
        <Detail label="Internal" value={networkInterfaces.data.internal} />
        <Detail label="Virtual" value={networkInterfaces.data.virtual} />
        <Detail label="operstate" value={networkInterfaces.data.operstate} />
        <Detail label="type" value={networkInterfaces.data.type} />
        <Detail label="duplex" value={networkInterfaces.data.duplex} />
        <Detail label="Maximum Transmission Unit" value={networkInterfaces.data.mtu} />
        <Detail label="Speed (Mbit/s)" value={networkInterfaces.data.speed} />
        <Detail label="DHCP IP address" value={networkInterfaces.data.dhcp} />
        <Detail label="DNS suffix" value={networkInterfaces.data.dnsSuffix} />
        <Detail label="IEEE 802.1x Auth" value={networkInterfaces.data.ieee8021xAuth} />
        <Detail label="IEEE 802.1x State" value={networkInterfaces.data.ieee8021xState} />
        <Detail label="# changes up/down" value={networkInterfaces.data.carrierChanges} />
      </DetailCard>
    }

    {networkInterfaces?.data && Array.isArray(networkInterfaces.data) && networkInterfaces.data.map((i, index) => (
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

    <h2>Network Stats</h2>

<>
    {networkStats?.data && networkStats.data.map((i, index) => (
      <DetailCard label={i.iface} key={index}>
        <Detail label="operstate" value={i.operstate} />
        <Detail label="received bytes overall" value={i.rx_bytes} />
        <Detail label="received dropped overall" value={i.rx_dropped} />
        <Detail label="received errors overall" value={i.rx_errors} />
        <Detail label="transferred bytes overall" value={i.tx_bytes} />
        <Detail label="transferred dropped overall" value={i.tx_dropped} />
        <Detail label="transferred errors overall" value={i.tx_errors} />
        <Detail label="received bytes / second " value={i.rx_sec} />
        <Detail label="transferred bytes per second" value={i.tx_sec} />
        <Detail label="interval length (ms)" value={i.ms} />
      </DetailCard>
    ))}

    </>

    <h2>Network Connections</h2>

<>
    {networkConnections?.data && networkConnections.data.map((c, index) => (
      <DetailCard label={`${c.localAddress}:${c.localPort}`} key={index}>
        <Detail label="Protocol" value={c.protocol} />
        <Detail label="peer address" value={c.peerAddress} />
        <Detail label="peer port" value={c.peerPort} />
        <Detail label="State" value={c.state} />
        <Detail label="pid" value={c.pid} />
        <Detail label="process name" value={c.process} />
      </DetailCard>
    ))}

    </>
  </Carpet>
)
}

export const NETWORK_URL = '/network';