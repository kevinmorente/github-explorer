/*
import {render} from 'react-dom';
import { App } from './app'

render(<App/>, document.getElementById('root'))
*/



import { createRoot } from 'react-dom/client';
import { App } from './App'
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);