import './style.css'
import {Button, Card} from "@material-ui/core";
import Case from "../case/case";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

const Game = () => {
    const inittab = ['', '', '', '', '', '', '', '', '']
    const [values, setValues] = useState(inittab)
    const [current, setCurrent] = useState('X')
    const [countX, setCountX] = useState(0)
    const [countO, setCountO] = useState(0)
    useEffect(() => {
        checkWinner();
    }, [current])

    const checkWinner = () => {
        const winner = current === 'X' ? 'O' : 'X';
        const iswinner =
            values[0] === winner && values[1] == winner && values[2] === winner ||
            values[3] === winner && values[4] == winner && values[5] === winner ||
            values[6] === winner && values[7] == winner && values[8] === winner ||
            values[0] === winner && values[3] == winner && values[6] === winner ||
            values[1] === winner && values[4] == winner && values[7] === winner ||
            values[2] === winner && values[5] == winner && values[8] === winner ||
            values[0] === winner && values[4] == winner && values[8] === winner ||
            values[2] === winner && values[4] == winner && values[6] === winner;
        if (iswinner) {
            if (winner === 'X') setCountX(countX + 1)
            else setCountO(countO + 1)
            setCurrent(winner)
            Swal.fire({
                title: winner + ' IS THE WINNER',
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
                .then(ok => {
                    if (ok.isConfirmed) {
                        setValues(inittab)
                    }
                })
        } else {
            if (nowinner()) {
                Swal.fire(' THIER IS NO WINNER', '', 'warning')
                    .then(ok => {
                        if (ok.isConfirmed) {
                            setValues(inittab)
                        }
                    })
            }
        }
    }
    const nowinner = () => {
        for (let i = 0; i < values.length; i++) {
            if (values[i] === '') {
                return false;
            }
        }
        return true
    }
    const reset = () => {
        setValues(inittab)
        setCurrent('X')
    }
    return (
        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>
                    X-O GAME</span>
                <span>X : {countX}</span>
                <span>O : {countO}</span>
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
            <Button onClick={reset} style={{marginTop: 20}} variant="contained" color="primary">
                Reset
            </Button>
        </div>

    )
}
export default Game
