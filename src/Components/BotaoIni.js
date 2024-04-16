import Styles from './BotaoIni.module.css'
import { Link } from 'react-router-dom'
function PaginaInicial() {
    return (

        <div className={Styles.container}>

            <div className={Styles.gamecontainer}>

                <h1>  JOGO DA VELHA </h1>
                <div>
                    <span className={Styles.x}>X</span>
                    <Link className={Styles.startbutton} to='/Modofacil'>Jogar com o BOT</Link>
                    <span className={Styles.x}>O</span>
                </div>
                <div>
                    <span className={Styles.x}>O</span>
                    <Link className={Styles.startbutton} to='/amigo'>Jogar com Amigo</Link>
                    <span className={Styles.x}>X</span>
                </div>
            </div>
        </div>

    )
}
export default PaginaInicial