import React from 'react';
import carContext from './carContext';


class carProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  handleBtn = () => {
    
    this.setState({ 
      red: !this.state.red,
      blue: !this.state.blue,
      yellow: !this.state.yellow })
  }

  render() {
    const contextValue = { // passo o state para uma const e apos repassado para o provider
      ...this.state,
      handleBtn: this.handleBtn,
    }
    return (
      <carContext.Provider value={contextValue}>
      {this.props.children}
      </carContext.Provider>
    );
  }
}

export default carProvider;