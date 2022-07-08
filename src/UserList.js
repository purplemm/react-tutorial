import { useEffect } from "react";

function User({ user, onRemove, onToggle }){
    const { id, userName, email, active } = user;

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            <b onClick={() => { onToggle(id) }} style={{color: active ? "green" : "black", cursor: "pointer"}}>{ userName }</b>
            <span> ({ email })</span>
            <button type="button" onClick={() => { onRemove(id) }}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }){
    return (
        <div>
            {
                users.map((user) => {
                    return <User key={ user.id } user={ user } onRemove={ onRemove } onToggle={ onToggle } />
                })
            }
        </div>
    )
}

export default UserList;