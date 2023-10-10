import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from '../../assets/ignite-simbol.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img src={logoImg} alt=""/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.HeaderButton>Nova transação</S.HeaderButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>

            </S.HeaderContent>
        </S.HeaderContainer>
    )
}