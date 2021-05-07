import './case.css'

const Case = (props) => {
    const {setValues, values, item} = props

    const changeValue = () => {
        if (values[item] === 'X') {
            const newValues = [...values];
            newValues[item] = 'O'
            setValues(newValues)
        } else {
            const newValues = [...values];
            newValues[item] = 'X'
            setValues(newValues)
        }
    }
    return (
        <div onClick={changeValue}
             className={'g-case'}>
            <span>{values[item]}</span>
        </div>

    )
}
export default Case
