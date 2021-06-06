import React, { useEffect } from 'react'
import { GetData } from '../../../Data/GetData'
import { HotData } from '../../../Data/HotData'
import { InitUser } from '../../Init/InitUser'



function User() {
    const [getUser, setGetUser] = useState([]);
    const [allUser, myUser] = InitUser();

    useEffect(() => {
        setGetUser(allUser);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default User
