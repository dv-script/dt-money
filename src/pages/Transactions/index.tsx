import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import * as S from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";


export function Transactions() {

    const { transactions } = useContext(TransactionsContext);

    return (
        <div>
            <Header />
            <Summary />

            <S.TransactionsContainer>
                <SearchForm />
                <S.TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td width="40%">{transaction.description}</td>
                                <td>
                                    <S.PriceHighlight $variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        R$ {transaction.price.toFixed(2)}
                                    </S.PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>


    )
}