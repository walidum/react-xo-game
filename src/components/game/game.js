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
                <Case key={0} values={values} setValues={setValues}/>
                <Case key={1} values={values} setValues={setValues}/>
                <Case key={2} values={values} setValues={setValues}/>
                <Case key={3} values={values} setValues={setValues}/>
                <Case key={4} values={values} setValues={setValues}/>
                <Case key={5} values={values} setValues={setValues}/>
                <Case key={6} values={values} setValues={setValues}/>
                <Case key={7} values={values} setValues={setValues}/>
                <Case key={8} values={values} setValues={setValues}/>

            </Card>
        </div>

    )
}
export default Game
