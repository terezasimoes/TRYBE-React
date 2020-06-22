import React from 'react'
import PropTypes from 'prop-types';
import './Dropdpown.css';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      childrenitemId: this.props.list[0].id,
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }))
  }

  handleItem(id){
    this.setState({
      childrenitemId: id,
    })
  }
  render(){
    const {children, list} = this.props
    const {isOpen, childrenitemId} = this.state;
    // procurar pelo item que tem o id:
    // const ckickedItem = list.find((elem) => elem.id === childrenitemId);
    const {item} = list.find((elem) => elem.id === childrenitemId);

    return (
      <div className="list-container">
        <h1>
      {/*{this.props.children}*/}
      {children}
        </h1>
        <div
        className="dropdown-button"
        onClick={this.handleDropdown}
        >
          {/* {list[0].item} */}
          {/* {ckickedItem.item} */}
          {item}
        </div>
        <div className={isOpen ? 'dropdown-menu' : 'dropdown-menu-hidden'}>
          {/*<p>{`Dropdwon ${isOpen ? 'aberto' : 'fechado'}`}</p>*/}
          {list.map(({id, item})=>( // uso id como cheve e o item pq tenho que mostrá-lo
            <div
            key={id}
            onClick={() => this.handleItem(id)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    
    )
  }
}
Dropdown.defaultProps = {
children :'Minha Lista'
}

Dropdown.propTypes = {
children: PropTypes.string,
list: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  item: PropTypes.string,
}))
}

export default Dropdown;