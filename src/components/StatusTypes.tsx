type StatusProps =
    {
        status: 'loading' | 'success' | 'error'
    }
const StatusTypes = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'loading ...'
    }
    else if (props.status === 'success') {
        message = 'success'
    }
    else if (props.status === 'error') {
        message = 'error'
    }
    return (
        <div>StatusTypes : {message}</div>
    )
}

export default StatusTypes