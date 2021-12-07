import { useState, memo } from 'react';
import ContentMemo from './ContentMemo';

// 1. memo() ->higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props


function Content() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <ContentMemo />
            <h1>{count}</h1>
            <button onClick={increase}>Click tui!</button>
        </div>
    )
}

export default Content;