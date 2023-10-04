import * as S from './styles';
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
    return (
        <S.SearchFormContainer>
            <input type="text" placeholder='Busque por transações'/>
            <button type='submit'>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </S.SearchFormContainer>
    )
}