import './style.css'
import {Card} from "@material-ui/core";
import Case from "../case/case";

const Game = () => {
    return (
        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>
                    X-O GAME</span>
                <span className={'text-2'}>
                    X Turn</span>
            </div>
            <Card className={'g-card'}>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
                <Case/>
            </Card>
        </div>

    )
}
export default Game
