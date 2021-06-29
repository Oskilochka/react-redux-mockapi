import React, {FC, useEffect} from 'react'
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";
import './index.css'

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
            {users.map(user => <div className='listItem'>* {user.name}</div>)}
        </div>
    )
}
