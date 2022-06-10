import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Carpet from "src/features/carpet/carpet";

export const Graphics = () => {

  const graphics = useQuery('graphics', window.invoke.graphics)
  const controllers = graphics?.data?.controllers
  const displays = graphics?.data?.displays

  return (<Carpet>

    <h2>Controllers</h2>

    <table className="table">
      <thead>
        <tr>
        <th scope="col">Vendor</th>
        <th scope="col">Model</th>
        <th scope="col">Bus</th>
        <th scope="col">VRAM Size(MB)</th>
        <th scope="col">Dynamically allocated RAM</th>
        </tr>
      </thead>
      <tbody>
        {controllers && controllers.map((c, index) => (
        <tr key={index}>
          <th scope="row">{c.vendor}</th>
          <td>{c.model}</td>
          <td>{c.bus}</td>
          <td>{c.vram}</td>
          <td>{JSON.stringify(c.vramDynamic)}</td>
        </tr>
          ))}
      </tbody>

    </table>

    <h2>Displays</h2>

    <table className="table">
      <thead>
        <tr>
        <th scope="col">Model</th>
        <th scope="col">main monitor</th>
        <th scope="col">Connection</th>
        <th scope="col">Pixel depth</th>
        <th scope="col">Resolution X</th>
        <th scope="col">Resolution Y</th>
        <th scope="col">current pixel X</th>
        <th scope="col">current pixel Y</th>
        </tr>
      </thead>
      <tbody>
        {displays && displays.map((d, index) => (
        <tr key={index}>
          <th scope="row">{d.model}</th>
          <td>{JSON.stringify(d.main)}</td>
          <td>{d.connection}</td>
          <td>{d.pixelDepth}</td>
          <td>{d.resolutionX}</td>
          <td>{d.resolutionY}</td>
          <td>{d.currentResX}</td>
          <td>{d.currentResY}</td>
        </tr>
          ))}
      </tbody>

    </table>
  </Carpet>
)
}

export const GRAPHICS_URL = '/graphics';