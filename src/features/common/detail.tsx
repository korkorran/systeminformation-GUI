import React from "react"

export const Detail = ({label, value, emptyIsRelevant = false} : {label : string, value : string | number | boolean, emptyIsRelevant?: boolean}) => (
  <>
  {(value || emptyIsRelevant) && (
    <tr>
      <th scope="row">
        {label}
      </th>
      <td>
       {typeof value === "boolean" ? JSON.stringify(value) : value ?? "None"}
      </td>
    </tr>
  )}
  </>
)