import React from 'react';
type ButtonPropsType ={
    name:string
    callBack:()=>void
}
export const Button = (props:ButtonPropsType) => {


    function onClickHandler() {
        props.callBack()
    }

    return (
        <div>
            {/*<button onClick={event => alert("Hello!!!")}>Go</button>*/}
            {/*<button onClick={()=>myFirsSubscribe("Alex")}>Name</button>*/}
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

