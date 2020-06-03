import React from 'react';

const Greet = props => {
console.log(props);
return (
  <div>
    <h1>Hello {props.name} a.K.a {props.heroName}</h1>
    {props.childrem}
  </div>
)

}



export default Greet;