import { useEffect, useState } from "react"

export default function Users() {
    //1. State create korlam ekhane == useState
    const [users, setUsers] = useState([]);

    // 2. useEffect with call back dipendency
    // useEffect( () => {

    //     // use fetch to load data
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     // .then(data => console.log(data))
    //     .then(data => setUsers(data))
    // }, []);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}