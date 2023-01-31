import { useEffect, useRef, useState } from 'react';
import './App.css';

import wolf from './img/wolf.png';
import chiken from './img/chiken.png';
import eggWhite from './img/white_egg.png';
import eggOrange from './img/orange_egg.png';

function App() {
	const eggPlaseEl = useRef(null);
	//const eggLeftTop = useRef(null);
	const cord = useRef(null);

	const [score, setScore] = useState(0);

	const [position, setPosition] = useState('start');
	const moveUpLeft = () => {
		setPosition('UpLeft');
	};

	const moveDownLeft = () => {
		setPosition('DownLeft');
	};

	const moveUpRight = () => {
		setPosition('UpRight');
	};

	const moveDownRight = () => {
		setPosition('DownRight');
	};

	useEffect(() => {}, [position]);
	//useEffect(() => {
	//	const onKeypress = (e) => {
	//		//if (e.key == 'ArrowRight') {
	//		//	moveRight();
	//		//} else if (e.key == 'ArrowLeft') {
	//		//	moveLeft();
	//		//}
	//	};

	//	document.addEventListener('keydown', onKeypress);
	//	return () => {
	//		document.removeEventListener('keydown', onKeypress);
	//	};
	//}, []);

	const positionWolf = (position) => {
		switch (position) {
			case 'UpLeft': {
				return (
					<>
						<img className="UpLeftWolf" src={wolf} alt="" />
						<div className="wolfRegBox leftTopReg"></div>
					</>
				);
			}

			case 'DownLeft': {
				return (
					<>
						<img className="DownLeftWolf" src={wolf} alt="" />
						<div className="wolfRegBox leftBotReg"></div>
					</>
				);
			}

			case 'UpRight': {
				return (
					<>
						<img className="UpRightWolf" src={wolf} alt="" />;
						<div className="wolfRegBox rightTopReg"></div>
					</>
				);
			}

			case 'DownRight': {
				return (
					<>
						<img className="DownRightWolf" src={wolf} alt="" />
						<div className="wolfRegBox rightBotReg"></div>
					</>
				);
			}

			case 'start': {
				return <img className="start" src={wolf} alt="" />;
			}
		}
	};

	//function changeCoord(timestamp) {
	//	document.getElementById('coord').innerText = document
	//		.getElementById('rect')
	//		.getBoundingClientRect().top;
	//	requestAnimationFrame(changeCoord);
	//}
	//requestAnimationFrame(changeCoord);

	//console.log(requestAnimationFrame());

	function changeCoord(timestamp) {
		cord.current.innerText = document.getElementById('egg').getBoundingClientRect().left;
		requestAnimationFrame(changeCoord);
	}
	requestAnimationFrame(changeCoord);

	const startEgg = (eggWhite) => {
		eggPlaseEl.current.innerHTML = `<img id='egg' src=${eggWhite} alt="" />`;
	};

	return (
		<div className="App">
			<h1>НУ ПОГОДИ, МАЗАФАКА | Счет: {score}</h1>
			<div ref={cord}></div>

			<button onClick={() => startEgg(eggWhite)}>запустить яйцо</button>
			<div className="container">
				<div className="chikenPlace">
					<img className="chiken" src={chiken} alt="" />
					<img className="chiken" src={chiken} alt="" />
				</div>

				<div ref={eggPlaseEl} className="eggPlace">
					{/*<img src={eggWhite} alt="" />*/}
				</div>

				<div className="">
					<div onClick={moveUpLeft} className="upLeftBtn circleBtn"></div>
					<div onClick={moveDownLeft} className="downLeftBtn circleBtn"></div>
				</div>

				<div className="wolf">{positionWolf(position)}</div>
				<div className="">
					<div onClick={moveUpRight} className="upRightBtn circleBtn"></div>
					<div onClick={moveDownRight} className="downRightBtn circleBtn"></div>
				</div>
				{/*<div className="eggPlace">
					<img src={eggOrange} alt="" />
				</div>*/}
				<div className="chikenPlace">
					<img className="chiken" src={chiken} alt="" />
					<img className="chiken" src={chiken} alt="" />
				</div>
			</div>
		</div>
	);
}

export default App;
