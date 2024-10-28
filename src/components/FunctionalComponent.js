import React from 'react'

function FunctionalComponent(props) {
  return (
    
      <div className="playerDiv">
          <img src={props.teamsPicURL} alt={props.altTxt}></img>
          <h3>Name : {props.name}</h3>
          <h4>Team : {props.team}</h4>
          <h4>Role : {props.role}</h4>
        </div>
    
  )
}

export default FunctionalComponent
