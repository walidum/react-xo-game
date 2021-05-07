import './style.css'
import {Card} from "@material-ui/core";

const Game = () => {
    return (
        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>X-O GAME</span>
                <span className={'text-2'}>X Turn</span>
            </div>
            <Card style={{background: 'red'}} className={'g-card'}>

            </Card>
        </div>

    )
}
export default Game
