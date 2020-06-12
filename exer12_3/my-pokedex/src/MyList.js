import React from 'react';
const MyList = (props) => {
  console.log(props.children)
  return (
    <div className='list'>
      <ul>
      {props.children.map((child) => {
        if(child.type && child.type === 'li') return child;
      return<li>{child}</li>
      })}
      </ul>
    </div>
  )
}
export default MyList;

// Para resolver esse problema, executamos um map sobre children.props, para cada filho, 
// e verificamos se já é um <li>. Se for, 
// ele retornará apenas o filho; caso não seja, ele retornará o filho dentro da tag <li>