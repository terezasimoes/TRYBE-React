import React, { Component } from 'react';
import Dropdown from './Dropdown';
// import Button from './Button';
// import Alert from './Alert';

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       showModal: false,
//       isDisableButton: false,
//     }
//   }

//   changeTitle = (value) => {
//     this.setState({ title: value })
//   }

//   changeShowComponent = () => {
//     this.setState((state) => (
//       {
//         showModal: !state.showModal,
//         isDisableButton: !state.isDisableButton
//       }
//     ))
//   }

//   render() {
//     return (
//       <div className='main'>
//         <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
//         {this.state.showModal &&
//           <Alert
//             hideComponent={this.changeShowComponent}
//           >
//             {
//               {
//                 title: "Preciso de um milagre",
//                 content: "React é complexo e preciso de mais tempo",
//                 timeSeconds: 4,
//               }
//             }
//           </Alert>
//           }
//       </div>
//     )
//   }
// }

function App() {
  const content = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
  ];

  return (
    <div className ="App">
      <Dropdown list = {content}>
        Título Bacana
      </Dropdown>

      {/* <Dropdown list = {content} /> se chamar dessa form o default.propsType é chamado */}

       

    </div>
  )
}

export default App;
