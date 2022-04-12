type ListProps = {
    friends: {
        name: string
    }[]
}

const ArrayTypes = (props: ListProps) => {
    return (
        <div style={{ border: '1px solid gray', width: '40%', margin: '0 auto' }}>
            ArrayTypes :
            {
                props.friends.map((friend) =>
                    <p>{friend.name}</p>
                )
            }
        </div>
    )
}

export default ArrayTypes