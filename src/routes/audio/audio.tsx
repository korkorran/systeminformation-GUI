import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";

export const Audio = () => {

  const audio = useQuery('audio', window.invoke.audio)

  return (<Carpet>
    <h2>Audio devices</h2>

<>
    {audio?.data && audio.data.map(d => (
      <DetailCard label={d.name} key={d.id}>
        <Detail label="ID" value={d.id} />
        <Detail label="Manufacturer" value={d.manufacturer} />
        <Detail label="Revision" value={d.revision} />
        <Detail label="Driver" value={d.driver} />
        <Detail label="Default" value={d.default} />
        <Detail label="Channel" value={d.channel} />
        <Detail label="Type" value={d.type} />
        <Detail label="Input Channel" value={d.in} />
        <Detail label="Output Channel" value={d.out} />
        <Detail label="Status" value={d.status} />
      </DetailCard>
    ))}

    </>
  </Carpet>
)
}

export const AUDIO_URL = '/audio';