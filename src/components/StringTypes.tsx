type NameProps = {
    name: string
}

const StringTypes = (props: NameProps) => {
    return (
        <div>StringTypes - {props.name}</div>
    )
}

export default StringTypes