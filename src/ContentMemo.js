import { memo } from 'react'

function ContentMemo() {

    console.log("Re-render");

    return (
        <h1>Hello Bảo</h1>
    )
}

export default memo(ContentMemo);