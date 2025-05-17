import React, { createContext, useEffect, useState } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('transactions');
        return saved ? JSON.parse(saved) : [];
    });

    const addTransaction = (transaction) => {
        setTransactions(prev => [...prev, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(tx => tx.id !== id));
    };

    const balance = transactions.reduce((acc, tx) =>
        tx.type === 'income' ? acc + tx.amount : acc - tx.amount, 0);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, balance }}>
            {children}
        </TransactionContext.Provider>
    );
};
