import { useEffect, useState } from 'react';
import './App.css';

import wolf from './img/wolf.png';
import chiken from './img/chiken.png';

function App() {
	const [position, setPosition] = useState('start');
	const moveUpLeft = () => {
		console.log('лево верх');
		setPosition('UpLeft');
		//setTimeout(() => setPosition('start'), 1000);
	};

	const moveDownLeft = () => {
		console.log('лево низ');
		setPosition('DownLeft');
		//setTimeout(() => setPosition('start'), 1000);
	};

	const moveUpRight = () => {
		console.log('право верх');
		setPosition('UpRight');
		//setTimeout(() => setPosition('start'), 1000);
	};

	const moveDownRight = () => {
		console.log('право низ');
		setPosition('DownRight');
		//setTimeout(() => setPosition('start'), 1000);
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
				return <img className="UpLeftWolf" src={wolf} alt="" />;
			}

			case 'DownLeft': {
				return <img className="DownLeftWolf" src={wolf} alt="" />;
			}

			case 'UpRight': {
				return <img className="UpRightWolf" src={wolf} alt="" />;
			}

			case 'DownRight': {
				return <img className="DownRightWolf" src={wolf} alt="" />;
			}

			case 'start': {
				return <img className="start" src={wolf} alt="" />;
			}
		}
	};

	return (
		<div className="App">
			<h1>НУ ПОГОДИ МАЗАФАКА</h1>
			<div className="container">
				<div className="chikenPlace">
					<img className="chiken" src={chiken} alt="" />
					<img className="chiken" src={chiken} alt="" />
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
				<div className="chikenPlace">
					<img className="chiken" src={chiken} alt="" />
					<img className="chiken" src={chiken} alt="" />
				</div>
			</div>
		</div>
	);
}

export default App;
