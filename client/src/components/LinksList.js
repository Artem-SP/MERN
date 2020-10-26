import "React" from 'react'
import {Link} from "react-router-dom"

export const LinksList = () => {
  if (!links.length) {
    return <p className="center"> No links yet</p>

  }
  return (
    <table>
    <thead>
      <tr>
          <th>#</th>
          <th>Original</th>
          <th>Short</th>
          <th>Open</th>          
      </tr>
    </thead>

    <tbody>
      {LinksList.map((link, index) => {
        return (
          <tr key={link._id}>
          <td>{index + 1 }</td>
          <td>{link.from}</td>
          <td>{link.to}</td>
          <td>
          <Link to={`/detail/${link.id}`}>Open</Link>
          </td>
        </tr>
        )
      })}
     
     </tbody>
  </table>
  )
}