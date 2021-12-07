import { useRef, useState, useEffect } from 'react';


// Lưu các giá trị qua một tham chiếu bên ngoài
// function component
// let timerId;

function Content() {
    const [count, setCount] = useState(60);

    const timerId = useRef(99);
    const h1Ref = useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => setCount(prevCount-1))
        }, 1000)
    }

    useEffect(()=>{
        console.log(h1Ref.current);
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content;