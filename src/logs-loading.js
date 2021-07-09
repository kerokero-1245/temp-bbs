import React from 'react';
export const Logsloading = (props) => {
     
    return (
      <div>
          {
              props.log.map((logs, index) => {
                return <div key={index}>{ logs.name }<br/>{ logs.text }</div>
              })
          }
      </div> 
    )
}
export default Logsloading