import {useState, useEffect} from 'react';
import {currencyTypeRate, defaultCurrency, defaultValue, currencyTypeObj} from '../data/currencyInfo';

function CurrencyConverter() {
    const [currencyValue, setCurrencyValue] = useState<string>(defaultValue.toString());
    const [currencyType, setCurrencyType] = useState<string>(defaultCurrency);
    const [newCurrencyValue, setNewCurrencyValue] = useState<number>(0);

    const onChangeHandler = (e:any): void => {
        let currVal = e.target.value;
        let result = convertCurrency(currVal, currencyType);
        setNewCurrencyValue(result);
        setCurrencyValue(currVal);
    }

    const onClickHandler = (): void => {
        setCurrencyValue(defaultValue.toString());
        setCurrencyType(defaultCurrency);
        let result:number = convertCurrency(defaultValue, defaultCurrency);
        setNewCurrencyValue(result);
    }

    const convertCurrency = (value: number, currType: String): number => {
        let rateItem:currencyTypeObj | undefined = currencyTypeRate.find((obj:currencyTypeObj):boolean => obj.currency === currType)
        let rate:number = 0;
        if (rateItem) {
            rate = rateItem.rate;
        }
        let result:number = Math.round((value / rate) * 100)/100;
        return result;
    }

    useEffect(()=> {
        let result:number = convertCurrency(parseFloat(currencyValue), currencyType);
        setNewCurrencyValue(result);
    }, [currencyType]);

    return (
        <>
            <h1>Currency Converter</h1>
            <div className='flex'>
                <div className='box'>
                    <select
                    value={currencyType}
                    onChange={(e)=>setCurrencyType(e.target.value)}>
                        {currencyTypeRate.map((value:currencyTypeObj, key:number) => {
                            return (
                                <option key={key} value={value.currency}>{value.currency}</option>
                            )
                        })}
                    </select>
                    <input
                    placeholder="Enter Value" 
                    name="currencyValue"
                    value={currencyValue}
                    onChange={onChangeHandler}
                    />
                </div>
                <div className='box'>
                    <h3>USD</h3>
                    <p>{newCurrencyValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                    
                </div>
            </div>
            <button onClick={onClickHandler}>Clear Values</button>
        </>
    )
}

export default CurrencyConverter;