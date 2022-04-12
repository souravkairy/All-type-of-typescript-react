type CompanyProp = {
    company: {
        name: string
        location: string
    }
}

const ObjectTypes = (props: CompanyProp) => {
    return (
        <div>ObjectTypes :{' ' + props.company.name} - {props.company.location}</div>
    )
}

export default ObjectTypes