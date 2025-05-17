import React from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useTransactions();

    return (
        <li className={`transaction ${transaction.type}`}>
            <span>{transaction.title}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>❌</button>
        </li>
    );
};

export default TransactionItem;
