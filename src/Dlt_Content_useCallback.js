import { useState, useCallback, useEffect } from 'react';
import ContentMemo from './ContentMemo';

// 1. memo() ->higher Order Component (HOC)
// 2. useCallback()

// Function cômponent + memo = PureComponent

// Hooks
// HOC
// Render props


function Content() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <ContentMemo onIncrese={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default Content;