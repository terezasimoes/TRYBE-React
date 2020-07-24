import React from 'react';
import carContext from './context/carContext';


function Cars() {

  return (
    <carContext.Consumer>
      {(context) => (
        <div>
          <div>
            <img src="" alt=""/>
            <button onClick={context.handleBtn}>Red</button>
          </div>
          <div>
            <img src="" alt=""/>
            <button onClick={context.handleBtn}>Blue</button>
          </div>
          <div>
            <img src="" alt=""/>
            <button onClick={context.handleBtn}>yellow</button>
          </div>
        </div>
      ) }
      
    </carContext.Consumer>
  )
}









// function Cars({
//   redCar, blueCar, yellowCar, moveCar,
// }) {
//   return (
//     <div>
//       <div>
//         <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
//         <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
//       </div>
//       <div>
//         <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
//         <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
//       </div>
//       <div>
//         <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
//         <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
//       </div>
//     </div>
//   );
// }







export default Cars;