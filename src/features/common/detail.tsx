import React from "react"

export const Detail = ({label, value, emptyIsRelevant = false} : {label : string, value : string | number, emptyIsRelevant?: boolean}) => (
  <>
  {(value || emptyIsRelevant) && (
    <tr>
      <th scope="row">
        {label}
      </th>
      <td>
       {value ?? "None"}
      </td>
    </tr>
  )}
  </>
)