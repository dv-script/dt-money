import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styles';
import { MagnifyingGlass } from 'phosphor-react'

type searchFormInputs = z.infer<typeof searchFormSchema>;

const searchFormSchema = z.object({
    query: z.string()
});

export function SearchForm() {

    const { fetchTransactions } = useContext(TransactionsContext);

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchTransactions(data: searchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder='Busque por transações'
                {...register('query')}
            />
            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </S.SearchFormContainer>
    )
}