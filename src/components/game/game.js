import './style.css'
import {Card} from "@material-ui/core";
import Case from "../case/case";
import {useState} from "react";

const Game = () => {
    const inittab = ['', '', '', '', '', '', '', '', '']
    const [values, setValues] = useState(inittab)
    return (
        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>
                    X-O GAME</span>
                <span className={'text-2'}>
                    X Turn</span>
            </div>
            <Card className={'g-card'}>
                <Case item={0} values={values} setValues={setValues}/>
                <Case item={1} values={values} setValues={setValues}/>
                <Case item={2} values={values} setValues={setValues}/>
                <Case item={3} values={values} setValues={setValues}/>
                <Case item={4} values={values} setValues={setValues}/>
                <Case item={5} values={values} setValues={setValues}/>
                <Case item={6} values={values} setValues={setValues}/>
                <Case item={7} values={values} setValues={setValues}/>
                <Case item={8} values={values} setValues={setValues}/>

            </Card>
        </div>

    )
}
export default Game
