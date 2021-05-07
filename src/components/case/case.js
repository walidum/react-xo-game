import './case.css'

const Case = (props) => {
    const {setValues, values, item} = props

    const changeValue = () => {
        if (values[item] === 'X') {
            const newVAlues = [...values];
            newVAlues[item] = 'O'
            setValues(newVAlues)
        } else {
            const newVAlues = [...values];
            newVAlues[item] = 'X'
            setValues(newVAlues)
        }

    }
    return (
        <div onClick={changeValue}
             className={'g-case'}>
            {values && values[item] && (
                <span>{values[item]}</span>
            )}
        </div>

    )
}
export default Case
