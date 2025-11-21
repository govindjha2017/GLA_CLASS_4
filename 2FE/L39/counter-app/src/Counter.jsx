

const Counter = ()=>{
    let count=0;
    let increase = ()=>{
        console.log('clicked');
        count+=1;
        console.log(count);
    }
    return(
        <>
            <h2>{count}</h2>
            <button onClick={increase}>click</button>
        </>
    )
}

export default Counter;