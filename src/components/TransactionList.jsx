import React from 'react';
import useTransactions from '../hooks/useTransactions';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
    const { transactions } = useTransactions();

    return (
        <ul className="transaction-list">
            {transactions.map(tx => (
                <TransactionItem key={tx.id} transaction={tx} />
            ))}
        </ul>
    );
};

export default TransactionList;
