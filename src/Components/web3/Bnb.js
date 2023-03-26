import React from 'react'
import Trading from '../Pages/Trading/Trading';

const Bnb = (props) => {
  const BNB = props.bnb;
  return (
    <div>
      <Trading bnb={BNB}></Trading>
      {/* <button>{props.bnb}BNB</button> */}
      {
        console.log("bnb", props.bnb)
        // console.log("bnb...............",BNB)
      }
    </div>
  )
}

export default Bnb







