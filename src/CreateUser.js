function CreateUser({ userName, email, onChange, onCreate }){
    return (
        <div>
            <input type="text" name="userName" placeholder="계정명" onChange={ onChange } value={ userName } />
            <input type="text" name="email" placeholder="이메일" onChange={ onChange } value={ email } />
            <button type="button" onClick={ onCreate }>등록</button>
        </div>
    )
}

export default CreateUser;