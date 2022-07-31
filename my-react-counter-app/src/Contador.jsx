import {useState} from 'react';
import './Contador.css';

export default function Contador() {
	const [counter, setCounter] = useState(0);

	function sumar(){
		setCounter(counter +1);
	}

	function restar(){
		setCounter(counter -1);
	}

	function restart(){
		setCounter(0);
	}

	return(
	<div>
		<div className="divNum" id={counter<0 && "neg"} >
			<h2 id="num">{counter}</h2>
		</div>
		<div id="divBtn">
			<button className="btn" id="menos" onClick={restar} >-</button>
			<button id="start" onClick={restart} >Restart</button>
			<button className="btn" id="mas" onClick={sumar} >+</button>
		</div>
	</div>
		)
}