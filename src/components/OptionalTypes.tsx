type NumberProps = {
    number?: number
}

const OptionalTypes = (props: NumberProps) => {
    return (
        <div>OptionalTypes : {props.number}</div>
    )
}

export default OptionalTypes