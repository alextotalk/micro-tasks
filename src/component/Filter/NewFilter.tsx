import React from 'react';
import {NewFilterPropsType} from "./Filter";



const NewFilter = (props:NewFilterPropsType) => {

    return (
        <>
            <ul>{props.currentMoney.map((objectFromWallet) =>
                < li key={objectFromWallet.id}>
                    < span> BANKNOTE - {objectFromWallet.banknote}</span>
                    <span> NOMINAL - {objectFromWallet.nominal}</span>
                    <span> NUMBER - {objectFromWallet.number}</span>
                    <span> NUMBER - {objectFromWallet.id}</span>
                </li>
            )}
            </ul>
            <button onClick={() => {props.onClickFilterMoney('all')}}>All</button>
            <button onClick={() => {props.onClickFilterMoney('dollar')}}>Dollar</button>
            <button onClick={() => {props.onClickFilterMoney('grn')}}>Grivnya</button>
        </>
    );
};

export default NewFilter;