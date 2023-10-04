import * as S from "./styles";

import logoImg from '../../assets/ignite-simbol.svg'

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img src={logoImg}/>

                <S.HeaderButton>Nova transação</S.HeaderButton>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}