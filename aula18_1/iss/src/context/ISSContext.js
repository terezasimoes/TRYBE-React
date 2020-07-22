import { createContext } from 'react';


const ISSContext = createContext()// me retorna 2 objetos ( Provider e Consume)


export default ISSContext;

/* se tiver nao tiver Provider e eu estiver consumindo um contexto
o valor do consumido no contexto é aquele passado na hora de criá -lo, l.10 
SE TIVER O PROVIDER e eu tiver n providers para esse contexto 
o contexto consumido pelo componente é o provido pelo Provider MAIS PRÓXIMO
*/