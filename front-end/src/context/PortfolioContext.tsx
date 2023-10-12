import { createContext } from 'react';
import { type IGlobalContext } from './interfaces/IContext';

const PortfolioContext = createContext({} as IGlobalContext);

export default PortfolioContext;
