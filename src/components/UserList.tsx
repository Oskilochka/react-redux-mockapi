import React, {FC, useEffect} from 'react'
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

export const UserList: FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <h1> User list </h1>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    )
}
