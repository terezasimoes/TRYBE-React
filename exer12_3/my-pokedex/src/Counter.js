import React from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {

    this.setState((prevState, props) => ({
      count: prevState.count + props.addValue
    }))
    console.log(this.state.count)

    {/* '2'
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("callback value", this.state.count)
    })
  console.log(this.state.count) */}


    {/* '1'
      this.state. count = this.state.count + 1
    console.log(this.state.count)
    */}
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }


  render() {
    return(
      <div>
        <div>Count - {this.state.count}</div>
        {/*<button onClick={() => this.increment()}>Increment</button>*/}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
