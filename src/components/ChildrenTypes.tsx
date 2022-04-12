type ChildrenProps = {
    children: React.ReactNode
}

const ChildrenTypes = (props: ChildrenProps) => {
    return (
        <div>ChildrenTypes : {props.children}</div>
    )
}

export default ChildrenTypes