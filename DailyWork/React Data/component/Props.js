import React from 'react'

export default function Props(property) {
  return (
    <div>
        <h1>This is a example to pass parameter in function (component)</h1>
        < img src={property.url} width={300} alt='myimage'/>
    </div>
  )
}
