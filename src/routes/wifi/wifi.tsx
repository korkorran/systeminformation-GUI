import React from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Wifi = () => {
  const wifiNetworks = useQuery('wifi_networks', window.invoke.wifi_networks);
  const wifiInterfaces = useQuery('wifi_interfaces', window.invoke.wifi_interfaces)
  const wifiConnections = useQuery('wifi_connections', window.invoke.wifi_connections);

  return (<Carpet>

    <h2>Wifi networks</h2>

    <>
    {wifiNetworks?.data && wifiNetworks.data.map((n, i) => (
      <DetailCard label={n.ssid} key={i}>
        <Detail label="BSSID (mac)" value={n.bssid} />
        <Detail label="mode" value={n.mode} />
        <Detail label="channel" value={n.channel} />
        <Detail label="frequency (MHz)" value={n.frequency} />
        <Detail label="Signal level (dB)" value={n.signalLevel} />
        <Detail label="Quality (%)" value={n.quality} />
        <Detail label="Security" value={JSON.stringify(n.security)} />
        <Detail label="WPA flags" value={JSON.stringify(n.wpaFlags)} />
        <Detail label="RSN flags" value={JSON.stringify(n.rsnFlags)} />
      </DetailCard>
    ))}
    </>

      <h2>Wifi Interfaces</h2>
    <>
    {wifiInterfaces?.data && wifiInterfaces.data.map((i, index) => (
      <DetailCard label={i.id} key={index}>
        <Detail label="Interface" value={i.iface} />
        <Detail label="Model" value={i.model} />
        <Detail label="Vendor" value={i.vendor} />
        <Detail label="MAC" value={i.mac} />
      </DetailCard>
    ))}
    </>

      <h2>Wifi connections</h2>

    <>
    {wifiConnections?.data && wifiConnections.data.map((c, i) => (
      <DetailCard label={c.id} key={i}>
        <Detail label="Interface (iface)" value={c.iface} />
        <Detail label="Model" value={c.model} />
        <Detail label="Wifi network SSID" value={c.ssid} />
        <Detail label="BSSID (mac)" value={c.bssid} />
        <Detail label="Channel" value={c.channel} />
        <Detail label="Frequency (MHz)" value={c.frequency} />
        <Detail label="Type" value={c.type} />
        <Detail label="Security" value={c.security} />
        <Detail label="Signal level (dB)" value={c.signalLevel} />
        <Detail label="transfer rate (Mbit/s)" value={c.txRate} />
      </DetailCard>
    ))}
    </>

  </Carpet>
)
}

export const WIFI_URL = '/wifi';