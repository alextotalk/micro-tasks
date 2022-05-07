import React, {useState} from 'react';
import NewFilter from "./NewFilter";

export type NewFilterPropsType = {
    currentMoney: MoneyType
    onClickFilterMoney: (currentMoneyName: FilterType) => void
}

type FilterType = (
    'all' | 'dollar' | 'grn'
    )
export type MoneyType = {
    id: number,
    banknote: string,
    nominal: number,
    number: string
}[]
const Filter = () => {
    let wallet:MoneyType = [
        {id: 1, banknote: 'dollar', nominal: 100, number: 'qqw333323'},
        {id: 2, banknote: 'grn', nominal: 200, number: 'qqw333323'},
        {id: 3, banknote: 'dollar', nominal: 20, number: 'qqw333323'},
        {id: 4, banknote: 'grn', nominal: 10, number: 'qqw333323'},
        {id: 5, banknote: 'grn', nominal: 10, number: 'q32343242'}
    ]
    let [money] = useState<MoneyType>(wallet)

    let [moneyName, setMoneyName] = useState<FilterType>('all')

    let currentMoney = money
    if (moneyName === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    if (moneyName === 'grn') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'grn')
    }

    function onClickFilterMoney(currentMoneyName: FilterType) {
        setMoneyName(currentMoneyName)
    }

    return (
        <>
            <NewFilter onClickFilterMoney={onClickFilterMoney} currentMoney={currentMoney}/>
        </>
    );
};

export default Filter;