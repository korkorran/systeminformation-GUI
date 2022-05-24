import React from "react";

import { useAppSelector, useAppDispatch } from 'src/config/hooks';
import Carpet from "src/features/carpet/carpet";
import {
  decrement,
  increment,
  selectCount,
} from './processusListSlice';

export const ProcessusList = () => {

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (<Carpet>

    <h2>Processus List</h2>

      <div >
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
          +
        </button>
      </div>

  </Carpet>
)
}