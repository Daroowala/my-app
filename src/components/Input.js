import React from 'react'

export default function Input(props) {
  return (

  <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    
  )
}
