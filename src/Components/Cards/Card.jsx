import * as S from "../Styles/Styled"
import xbox from "../../assets/xbox.svg"
import CyberPunk from "../../assets/CyberPunk.svg"
import multiverseGame from "../../assets/multiverseGame.svg"
import EAnotice from "../../assets/EAnotice.svg"

export default function Card() {
  return (
    <S.BoxCard>
        <S.BoxCardSecond>
          <S.Card>
              <p>19 de outubro, 2023</p>
              <img src={xbox} alt="Imagem do console Xbox" />
              <S.H3>Xbox: consoles ganham atualização com novos recursos</S.H3>
          </S.Card>
          <S.Card>
              <p>4 de outubro, 2023</p>
              <img src={CyberPunk} alt="Imagem do jogo CyberPunk" />
              <S.H3>Cyberpunk vai ganhar novo jogo</S.H3>
          </S.Card>
          <S.Card>
              <p>19 de outubro, 2023</p>
              <img src={multiverseGame} alt="Imagem do jogo Multiverse" />
              <S.H3>Coringa pode aparecer em MultiVersus em breve</S.H3>
          </S.Card>
        </S.BoxCardSecond>
        <S.CardTwo>
            <p>30 de agosto, 2023</p>
            <img src={EAnotice} alt="Imagem sobre a EA empresa de games" />
            <S.Title>EA Games confirma novo jogo e janela de lançamento</S.Title>
        </S.CardTwo>
        <S.LoadingWritting>
          <p>Carregar mais  &or;</p>
        </S.LoadingWritting>
        
    </S.BoxCard>
  )
}
