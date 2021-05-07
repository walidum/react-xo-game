import './case.css'
import {useState} from "react";

const Case = () => {
    const [value, setValue] =
        useState('X')
    const changeValue = () => {
        if (value === 'X')
            setValue('O')
        else setValue('X')
    }
    return (
        <div onClick={changeValue}
             className={'g-case'}>
            <span>{value}</span>
        </div>

    )
}
export default Case
