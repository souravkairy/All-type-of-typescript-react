type BooleanProps = {
    isLoggedIn: boolean
}

const BooleanTypes = (props: BooleanProps) => {
    return (
        <div>BooleanTypes : {props.isLoggedIn ? "true" : "false"}</div>
    )
}

export default BooleanTypes