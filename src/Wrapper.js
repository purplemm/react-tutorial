function Wrapper({ children }){
    const style = {
        border: "2px solid #000",
        padding: 16
    }

    return <div style={ style }>{ children }</div>
}

export default Wrapper;