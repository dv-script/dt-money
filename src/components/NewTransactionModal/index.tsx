import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <S.Overlay />
            <S.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <S.CloseButton>
                    <X size={24} />
                </S.CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <S.TransactionType>

                        <S.TransactionTypeButton value="income" $variant="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </S.TransactionTypeButton>

                        <S.TransactionTypeButton value="outcome" $variant="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </S.TransactionTypeButton>

                    </S.TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </S.Content>
        </Dialog.Portal>
    )
}