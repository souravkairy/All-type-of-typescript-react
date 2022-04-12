import React from "react"

type ClickProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}


const ClickEventTypes = (props: ClickProps) => {
    return (
        <div>ClickEventTypes :{' '}
            <button onClick={props.handleClick}>Click Here</button>
        </div>
    )
}

export default ClickEventTypes