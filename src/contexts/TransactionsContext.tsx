import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        });
        setTransactions(response.data);
    }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, price, category, type } = data;
        const response = await api.post('/transactions', {
            description,
            type,
            category,
            price,
            createdAt: new Date()
        });

        setTransactions(prev => [response.data, ...prev])
    }

    useEffect(() => {
        fetchTransactions();
    }
        , [])

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}