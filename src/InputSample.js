import { useState, useRef } from "react"

// 여러개의 input 상태관리하기 (useState) , 특정 DOM 선택하기 (useRef)
function InputSample(){
    const [inputs, setInputs] = useState({
        name: "",
        nickName: ""
    });

    const nameInput = useRef();

    const { name, nickName } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        // 객체 상태를 업데이트 할 때는 카피 후에 해야함 (불변성)
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onReset = () => {
        setInputs({
            name: "",
            nickName: ""
        });
        console.log(nameInput.current);
        nameInput.current.focus();
    }

    return (
        <div>
            <input type="text" name="name" onChange={ onChange } placeholder="이름" value={ name } ref={ nameInput } />
            <input type="text" name="nickName" onChange={ onChange } placeholder="닉네임" value={ nickName } />
            <button type="button" onClick={ onReset }>초기화</button>
            <div>
                <b>값: </b>
                { name } ({ nickName })
            </div>
        </div>
    )
}

export default InputSample;