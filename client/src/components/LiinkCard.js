import React from 'react'

export const LinkCard = ({link}) => {
  return ( 
    <>
    <h2>Link</h2>
    <p> Your link: <a href={link.to} target={blank} rel='noopener norefferrer'>{link.to}</a> 
    <p> From: <a href={link.from} target={blank} rel='noopener norefferrer'>{link.from}</a>
    <p>Clicks: <strong>{link.clicks} </strong></p>
    <p>Created: <strong> {new Date(link.date).toLocaleDateString()} </strong></p>
    </>
  )

}