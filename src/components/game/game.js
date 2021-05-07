import './style.css'
import {Card} from "@material-ui/core";
import Case from "../case/case";
import {useState} from "react";

const Game = () => {
    const inittab = ['', '', '', '', '', '', '', '', '']
    const [values, setValues] = useState(inittab)
    const [current, setCurrent] = useState('X')
    return (
        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>
                    X-O GAME</span>
                <span className={'text-2'}>
                    {current} Turn</span>
            </div>
            <Card className={'g-card'}>
                <Case current={current}
                      setCurrent={setCurrent}
                      item={0} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent}
                      item={1} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent} item={2} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent} item={3} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent} item={4} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent} item={5} values={values} setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent}
                      item={6}
                      values={values}
                      setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent}
                      item={7}
                      values={values}
                      setValues={setValues}/>
                <Case current={current}
                      setCurrent={setCurrent}
                      item={8}
                      values={values}
                      setValues={setValues}/>

            </Card>
        </div>

    )
}
export default Game
