import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { cats } from "./Cats";

ReactDOM.render(
	<div>
	<Card id={cats[0].id} name={cats[0].name} email={cats[0].email} /> 
	<Card id={cats[1].id} name={cats[1].name} email={cats[1].email}/>
	<Card id={cats[2].id} name={cats[2].name} email={cats[2].email}/>



	</div>, document.getElementById('root'));
registerServiceWorker();
