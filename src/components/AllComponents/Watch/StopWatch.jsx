import React, { useState, useEffect, useRef } from "react";
import style from "./StopWatch.module.css";

function StopWatch() {

    const [isrunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isrunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isrunning])

    function start() {
        setIsrunning(true)
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsrunning(false)
    }

    function reset() {
        setElapsedTime(0)
        setIsrunning(false)
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className="container mt-20">
            <div className={style.stopwatch}>
                <div className={style.display}>
                    {formatTime()}
                </div>
                <div className={style.controls}>
                    <button onClick={start} className={style.startButton}>Start</button>
                    <button onClick={stop} className={style.stopButton}>Stop</button>
                    <button onClick={reset} className={style.resetButton}>Reset</button>
                </div>
            </div>
        </div>
    )

}

export default StopWatch;