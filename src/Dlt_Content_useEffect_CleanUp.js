import { useEffect, useState } from 'react';

//Demo Mounted & Unmounted 
//Demo useEffect


/**
 * 1. Update DOM
 * - change title whem typing
 * 2. Call API
 * 3. Listen DOM event
 * - Scroll
 * - Resize
 * 4. Cleanup
 * - Remove listen / unsubcribe
 * - Clear timers 
 * 
 */

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - gọi callback sau khi component add element vào dom
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mount
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------------------
// all1. Callback luôn được gọi sau khi component mounted
// all2. Cleanup function luôn được gọi trước khi component unmounted
// all3. Cleanup function luôn được gọi trước khi xallback được gọi (trước component mounted)

function Content() {
    const [count, setCount] = useState(1);

    // Cách 1:
    useEffect(() => {
        console.log(`Mounted or Re-render lần ${count}`);

        // Cleanup function
        return () => {
            console.log(`Cleanup lần ${count}`);
        }
    }, [count])


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>
                Click me!
            </button>
        </div>
    )
}

export default Content;