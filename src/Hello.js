// 함수형 컴포넌트, {color, name} -> 비구조화 할당
function Hello({ color, name, isSpecial }){
    return (
        <div style={{ color }}>{ isSpecial && <b>*</b> }안녕하세요 { name }</div>
    )
}

// props 초기값 세팅
Hello.defaultProps = {
    name: "이름없음"
}

export default Hello;