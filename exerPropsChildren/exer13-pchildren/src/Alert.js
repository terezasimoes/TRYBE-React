import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children: {title, content, timeSeconds} } = props;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
  
}

export default Alert;

// Alert.prototype = {
//   hideComponent: PropTypes.func.isRequired,
//   contentTitle: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired
// }

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({ // shape é para objeto
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  }),
};

// se nao tiver mensagem o que deveria ser passado para o usuário? 
// seria o defaut
Alert.defaultProps = {
  children: {
    title: "Socorro React é complexo",
    content: "Agarra na mão de Deus e vai",
    timeSeconds: 3
    },
}