import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Docker = () => {
  const dockerInfo = useQuery('docker_info', window.invoke.docker_info)

  return (<Carpet>

    <DetailCard label="General Docker Informations">
      <Detail label="Docker ID" value={dockerInfo?.data?.id} />
      <Detail label="Numbers of containers" value={dockerInfo?.data?.containers} />
      <Detail label="Number of running containers" value={dockerInfo?.data?.containersRunning} />
      <Detail label="Number of paused containers" value={dockerInfo?.data?.containersPaused} />
      <Detail label="Number of stopped containers" value={dockerInfo?.data?.containersStopped} />
      <Detail label="Number of images" value={dockerInfo?.data?.images} />
      <Detail label="Driver" value={dockerInfo?.data?.driver} />
      <Detail label="Has memory limit" value={dockerInfo?.data?.memoryLimit} />
      <Detail label="Has swap limit" value={dockerInfo?.data?.swapLimit} />
      <Detail label="Has kernel memory" value={dockerInfo?.data?.kernelMemory} />
      <Detail label="Has Cpu Cfs Period" value={dockerInfo?.data?.cpuCfsPeriod} />
      <Detail label="Has Cpu Cfs Quota" value={dockerInfo?.data?.cpuCfsQuota} />
      <Detail label="Has CpuShares" value={dockerInfo?.data?.cpuShares} />
      <Detail label="Has CpuSet" value={dockerInfo?.data?.cpuSet} />
      <Detail label="Has IPv4Forwarding" value={dockerInfo?.data?.ipv4Forwarding} />
      <Detail label="Has BridgeNfIptables" value={dockerInfo?.data?.bridgeNfIptables} />
      <Detail label="Has BridgeNfIp6tables" value={dockerInfo?.data?.bridgeNfIp6tables} />
      <Detail label="Debug on" value={dockerInfo?.data?.debug} />
      <Detail label="Named data networking forwarding Demon" value={dockerInfo?.data?.nfd} />
      <Detail label="Out-of-memory kill disabled" value={dockerInfo?.data?.oomKillDisable} />
      <Detail label="Number of NGOroutines" value={dockerInfo?.data?.ngoroutines} />
      <Detail label="docker System Time" value={dockerInfo?.data?.systemTime} />
      <Detail label="Logging driver" value={dockerInfo?.data?.loggingDriver} />
      <Detail label="cgroup Driver" value={dockerInfo?.data?.cgroupDriver} />
      <Detail label="Number of NEventsListeners" value={dockerInfo?.data?.nEventsListener} />
      <Detail label="Docker Kernel Version" value={dockerInfo?.data?.kernelVersion} />
      <Detail label="Docker OS" value={dockerInfo?.data?.operatingSystem} />
      <Detail label="OS Type" value={dockerInfo?.data?.osType} />
      <Detail label="architecture" value={dockerInfo?.data?.architecture} />
      <Detail label="Number of CPUs" value={dockerInfo?.data?.ncpu} />
      <Detail label="Memory Total" value={dockerInfo?.data?.memTotal} />
      <Detail label="Docker root directory" value={dockerInfo?.data?.dockerRootDir} />
      <Detail label="HTTP proxy" value={dockerInfo?.data?.httpProxy} />
      <Detail label="HTTPS proxy" value={dockerInfo?.data?.httpsProxy} />
      <Detail label="No Proxy" value={dockerInfo?.data?.noProxy} />
      <Detail label="Name" value={dockerInfo?.data?.name} />
      <Detail label="Labels" value={JSON.stringify(dockerInfo?.data?.labels)} />
      <Detail label="Is experimental build" value={dockerInfo?.data?.experimentalBuild} />
      <Detail label="Server version" value={dockerInfo?.data?.serverVersion} />
      <Detail label="Cluster store" value={dockerInfo?.data?.clusterStore} />
      <Detail label="Cluster advertise" value={dockerInfo?.data?.clusterAdvertise} />
      <Detail label="Default runtime" value={dockerInfo?.data?.defaultRuntime} />
      <Detail label="Live store enabled" value={dockerInfo?.data?.liveRestoreEnabled} />
      <Detail label="Isolation" value={dockerInfo?.data?.isolation} />
      <Detail label="init binary" value={dockerInfo?.data?.initBinary} />
      <Detail label="Product License" value={dockerInfo?.data?.productLicense} />
    </DetailCard>

  </Carpet>
)
}

export const DOCKER_URL = '/docker';