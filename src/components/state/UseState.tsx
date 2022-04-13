import { useState } from "react"
type AuthUser = {
    name: string,
    email: string
}

const UseState = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handlelogin = () => {
        setUser({
            name: 'Rasel Ahmed',
            email: 'raselahmed@gmail.com'
        })
    }
    const handlelogout = () => {
        setUser(null)
    }

    return (
        <div>UseState Types :
            <button onClick={handlelogin}>Log In</button>
            <button onClick={handlelogout}>Log Out</button>
            <p>User : {user?.name} & {user?.email}</p>
        </div>
    )
}

export default UseState