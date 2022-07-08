import { useMemo, useRef, useState, useCallback } from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import Wrapper from "./Wrapper";

function countActiveUsers(users){
  console.log("활성 사용자 카운트중");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    userName: "",
    email: ""
  });

  const { userName, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  // useRef는 특정 DOM을 선택할 수 있지만, 특정 변수를 만들때도 사용할 수 있다.
  // useRef를 사용하면 컴포넌트 값이 변경된다고 해서 리렌더링이 일어나지 않는다.
  const nextId = useRef(4);

  // 배열에 항목 추가하기
  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName,
      email
    };

    // 기존 배열과 추가 아이템 병합하는 방법 2가지
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      userName: "",
      email: ""
    });

    nextId.current++;
  };

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        userName: "first",
        email: "first@gmail.com",
        active: true
    },{
        id: 2,
        userName: "second",
        email: "second@gmail.com",
        active: false
    },{
        id: 3,
        userName: "third",
        email: "third@gmail.com",
        active: false
    }
  ]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // <Wrapper>
    //   {/* props 이름만 입력하고 값을 설정하지 않는 경우 true 값으로 기본 설정됨 */}
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello color="pink" />
    // </Wrapper>

    // <Counter />

    // <InputSample />
    <>
      <CreateUser userName={ userName } email={ email } onChange={ onChange } onCreate={ onCreate } />
      <UserList users={ users } onRemove={ onRemove } onToggle={ onToggle } />
      <div>활성 사용자 수: { count }</div>
    </>
  )
}

export default App;
