import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import {
  getSystemData
} from './systemSlice';

export const System = () => {

  const systemData = useAppSelector(root => root.system.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSystemData())
  }, [])

  return (<Carpet>

    <h2>System</h2>

      <div >
        <p>Manufacturer : {systemData?.manufacturer}</p>
        <p>Model : {systemData?.model}</p>
        <p>Version : {systemData?.version}</p>
        <p>Serial Number : {systemData?.serial}</p>
        <p>UUID : {systemData?.uuid}</p>
        <p>SKU : {systemData?.sku}</p>
        <p>Virtual Machine : {JSON.stringify(systemData?.virtual)}</p>
      </div>

  </Carpet>
)
}