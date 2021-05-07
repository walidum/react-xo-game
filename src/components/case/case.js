import './case.css'

const Case = (props) => {
    const {setValues, values, item, current, setCurrent} = props

    const changeValue = () => {
        if (!values[item]) {
            if (current === 'X') {
                const newValues = [...values];
                newValues[item] = 'X'
                setValues(newValues)
                setCurrent('O')
            }
            if (current === 'O') {
                const newValues = [...values];
                newValues[item] = 'O'
                setValues(newValues)
                setCurrent('X')
            }
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
