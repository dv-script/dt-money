import * as S from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />


            <S.TransactionsContainer>
                <S.TransactionsTable>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <S.PriceHighlight variant="income">
                                    R$ 12.000,00
                                </S.PriceHighlight>
                            </td>
                        <td>Venda</td>
                        <td>04/10/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <S.PriceHighlight variant="outcome">
                                R$ - 69,00
                            </S.PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>02/10/2023</td>
                    </tr>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>

            
    )
}