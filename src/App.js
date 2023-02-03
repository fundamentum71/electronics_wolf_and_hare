import { useEffect, useRef, useState } from 'react';
import './App.css';

import wolf from './img/wolf.png';
import chiken from './img/chiken.png';
import eggWhite from './img/white_egg.png';
import eggOrange from './img/orange_egg.png';

function App() {
	const firstCheken = useRef(null);
	const firstEgg = useRef(null);
	const firstRegBox = useRef(null);

	const secondRegBox = useRef(null);
	const thirdRegBox = useRef(null);
	const fourthRegBox = useRef(null);

	const [start, setStart] = useState(false);
	const [score, setScore] = useState(0);

	const [overPositionRegBoxLeft, setOverPositionRegBoxLeft] = useState('start');
	const [overPositionRegBoxTop, setOverPositionRegBoxTop] = useState('start');

	const [position, setPosition] = useState('start');

	const moveUpLeft = () => {
		setPosition('UpLeft');
		changePositionRegBox(firstRegBox);
	};

	const moveDownLeft = () => {
		setPosition('DownLeft');
		changePositionRegBox(secondRegBox);
	};

	const moveUpRight = () => {
		setPosition('UpRight');
		changePositionRegBox(thirdRegBox);
	};

	const moveDownRight = () => {
		setPosition('DownRight');
		changePositionRegBox(fourthRegBox);
	};

	//смена позиции на кнопки
	useEffect(() => {
		const onKeypress = (e) => {
			switch (e.key) {
				case 'q': {
					setPosition('UpLeft');
					changePositionRegBox(firstRegBox);
					break;
				}

				case 'й': {
					setPosition('UpLeft');
					changePositionRegBox(firstRegBox);
					break;
				}
				case 'a': {
					setPosition('DownLeft');
					changePositionRegBox(secondRegBox);
					break;
				}
				case 'ф': {
					setPosition('DownLeft');
					changePositionRegBox(secondRegBox);
					break;
				}
				case 'e': {
					setPosition('UpRight');
					changePositionRegBox(thirdRegBox);
					break;
				}
				case 'у': {
					setPosition('UpRight');
					changePositionRegBox(thirdRegBox);
					break;
				}
				case 'd': {
					setPosition('DownRight');
					changePositionRegBox(fourthRegBox);
					break;
				}
				case 'в': {
					setPosition('DownRight');
					changePositionRegBox(fourthRegBox);
					break;
				}
			}
		};

		document.addEventListener('keydown', onKeypress);

		return () => {
			document.removeEventListener('keydown', onKeypress);
		};
	}, []);

	const positionWolf = (position) => {
		switch (position) {
			case 'UpLeft': {
				return (
					<>
						<img className="UpLeftWolf" src={wolf} alt="" />
						<div ref={firstRegBox} className="wolfRegBox firstRegBox"></div>
					</>
				);
			}

			case 'DownLeft': {
				return (
					<>
						<img className="DownLeftWolf" src={wolf} alt="" />
						<div ref={secondRegBox} className="wolfRegBox leftBotReg"></div>
					</>
				);
			}

			case 'UpRight': {
				return (
					<>
						<img className="UpRightWolf" src={wolf} alt="" />;
						<div ref={thirdRegBox} className="wolfRegBox rightTopReg"></div>
					</>
				);
			}

			case 'DownRight': {
				return (
					<>
						<img className="DownRightWolf" src={wolf} alt="" />
						<div ref={fourthRegBox} className="wolfRegBox rightBotReg"></div>
					</>
				);
			}

			case 'start': {
				return <img className="start" src={wolf} alt="" />;
			}
		}
	};

	//координаты 1 курицы
	let positionfirstChikenLeft = 0;
	let positionfirstChikenTop = 0;

	useEffect(() => {
		positionfirstChikenLeft = firstCheken.current.getBoundingClientRect().left;
		positionfirstChikenTop = firstCheken.current.getBoundingClientRect().top;
	}, [start]);

	//координаты 1 яйца
	let positionFirstEggLeft = 0;
	let positionFirstEggTop = 0;

	//сделать для всех яиц
	function changeCoordEgg() {
		positionFirstEggLeft = Math.round(firstEgg.current.getBoundingClientRect().left);
		positionFirstEggTop = Math.round(firstEgg.current.getBoundingClientRect().top);
		console.log(`Позиция яйца - Лево:${positionFirstEggLeft}| Верх:${positionFirstEggTop} `);

		requestAnimationFrame(changeCoordEgg, 1000);

		console.log('over', overPositionRegBoxLeft, overPositionRegBoxTop);

		finishFlyEgg(
			positionFirstEggLeft,
			//positionFirstEggTop,
			overPositionRegBoxLeft,
			//overPositionRegBoxTop,
		);
	}

	//координаты регбокса

	function changePositionRegBox(numRegBox) {
		const positionRegBoxLeft = Math.round(numRegBox.current.getBoundingClientRect().left);
		const positionRegBoxTop = Math.round(numRegBox.current.getBoundingClientRect().top);
		console.log(`Позиция regbox - Лево:${positionRegBoxLeft}| Верх:${positionRegBoxTop} `);

		setOverPositionRegBoxLeft(positionRegBoxLeft);
		setOverPositionRegBoxTop(positionRegBoxTop);
	}

	const startEgg = () => {
		setStart(true);
		requestAnimationFrame(changeCoordEgg, 1000);
	};

	const restartEgg = () => {
		if (positionFirstEggLeft === 0 && positionFirstEggTop === 0) {
			setStart(false);
		}
	};

	const finishFlyEgg = (
		finishPositionEggLeft,
		//finishPositionEggTop,
		finishPositionRegBoxLeft,
		//finishPositionRegBoxTop,
	) => {
		if (
			finishPositionEggLeft == finishPositionRegBoxLeft
			//finishPositionEggTop == finishPositionRegBoxTop
		) {
			setScore(score + 1);
			setStart(false);
		} else restartEgg();
	};

	return (
		<div className="App">
			<h1>НУ ПОГОДИ, МАЗАФАКА | Счет: {score}</h1>

			<button onClick={() => startEgg()}>запустить яйцо</button>
			<button onClick={() => restartEgg()}>перезарядить</button>
			<div className="container">
				<div className="chikenPlace">
					<img ref={firstCheken} className="chiken" src={chiken} alt="" />
					<img className="chiken" src={chiken} alt="" />
				</div>

				<div className="eggPlace">
					{start ? (
						<img
							ref={firstEgg}
							id="egg"
							src={eggWhite}
							style={{ top: `${positionfirstChikenTop}px`, left: `${positionfirstChikenLeft}px` }}
						/>
					) : (
						''
					)}
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
