import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import { Detail } from "src/features/common/detail";
import { DetailCard } from "src/features/common/detailCard";
import { getAudioData } from "./audioSlice";

export const Audio = () => {
  const dispatch = useAppDispatch();
  const audioData = useAppSelector(root => root.audio.audioData);

  useEffect(() => {
    dispatch(getAudioData());
  }, [])

  return (<Carpet>
    <h2>Audio devices</h2>

<>
    {audioData && audioData.map(d => (
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