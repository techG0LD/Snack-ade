import { useEffect, createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {

            // let response = await fetch('http://localhost:4005/api/authen/profile', {
            let response = await fetch('https://snack-ade.onrender.com/api/authen/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser } }>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider