import { memo } from 'react'

function ContentMemo({ onIncrese }) {

    console.log("Re-render");

    return (
        <>
            <h1>Hello Bảo</h1>
            <button onClick={onIncrese}>Click tui!</button>
        </>
    )
}

export default memo(ContentMemo);