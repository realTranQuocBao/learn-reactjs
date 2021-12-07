import { useRef, useState } from 'react';


// Lưu các giá trị qua một tham chiếu bên ngoài
// function component
// let timerId;

function Content() {
    const [count, setCount] = useState(60);

    const timerId = useRef(99);

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => setCount(prevCount-1))
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content;