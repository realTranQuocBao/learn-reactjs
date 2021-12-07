import { useEffect, useState, useLayoutEffect } from 'react';

//Demo Mounted & Unmounted 
//Demo useEffect


/**
 * useEffect
 * 1. cập nhật lại state
 * 2. cập nhật lại DOM (mutated)
 * 3. render lại UI
 * 4. gọi cleanup nếu deps thay đổi
 * 5. gọi useEffect callback
 * 
 * useLayoutEffect
 * 1. cập nhật lại state
 * 2. cập nhật DOM (mutated)
 * 3. gọi cleanup nếu deps thay đổi (sync)
 * 4. gọi useLayoutEffect callback (sync)
 * 5. render lại UI  
 * 
 */

function Content() {
    const [count, setCount] = useState(0);

    const handleRun = () => {
        setCount(count+1)
    }

    // dùng useEfect
    // useEffect(() => {
    //     if(count>3) setCount(0);
    // }, [count])
    
    //fix
    useLayoutEffect(() => {
        if(count>3) setCount(0);
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content;