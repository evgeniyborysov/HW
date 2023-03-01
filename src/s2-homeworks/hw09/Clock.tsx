import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

const addZero = (number: number) => {
	return number < 10 ? "0" + number : number;
};

function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined);
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(
		new Date(restoreState("hw9-date", Date.now()))
	);
	const [show, setShow] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const today = date.toLocaleDateString("en-US", { weekday: "long" });
	const todayNumber = +date.toLocaleDateString("en-US", { day: "numeric" });
	const monthName = date.toLocaleDateString("en-US", { month: "long" });
	const monthNumber = +date.toLocaleDateString("en-US", { month: "numeric" });
	const year = date.getFullYear();

	const hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const start = () => {
		// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
		// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
		let id = window.setInterval(() => {
			setDate(new Date());
		}, 1000);
		setTimerId(id);
		setDisabled(true);
	};

	const stop = () => {
		// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
		clearInterval(timerId);
		setDisabled(false);
	};

	const onMouseEnter = () => {
		// пишут студенты // показать дату если наведена мышка
		setShow(true);
	};
	const onMouseLeave = () => {
		// пишут студенты // спрятать дату если мышка не наведена
		setShow(false);
	};

	const stringTime = `${addZero(hour)} : ${addZero(minutes)} : ${addZero(
		seconds
	)}` || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
	const stringDate = `${addZero(todayNumber)}.${addZero(
		monthNumber
	)}.${year}` || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

	// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
	const stringDay = `${today} ` || <br />; // пишут студенты
	const stringMonth = `${monthName}` || <br />; // пишут студенты

	return (
		<div className={s.clock}>
			<div
				id={"hw9-watch"}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={"hw9-day"}>{stringDay}</span>,{" "}
				<span id={"hw9-time"}>
					<strong>{stringTime}</strong>
				</span>
			</div>

			<div id={"hw9-more"}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={"hw9-month"}>{stringMonth}</span>,{" "}
							<span id={"hw9-date"}>{stringDate}</span>
						</>
					) : (
						<>
							<br />
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={"hw9-button-start"}
					disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
					onClick={start}
				>
					start
				</SuperButton>
				<SuperButton
					id={"hw9-button-stop"}
					disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
				>
					stop
				</SuperButton>
			</div>
		</div>
	);
}

export default Clock;
