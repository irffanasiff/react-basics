import React from 'react'

const MemoComponent = (props) => {
    console.log("memo component")
    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(MemoComponent)
