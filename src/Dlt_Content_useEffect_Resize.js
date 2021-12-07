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

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>{`${width}x${height}`}</h1>
        </div>
    )
}

export default Content;