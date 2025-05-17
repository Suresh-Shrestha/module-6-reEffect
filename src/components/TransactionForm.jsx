import React, { useState, useRef, useEffect } from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const inputRef = useRef(null);
    const { addTransaction } = useTransactions();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTx = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            type
        };
        addTransaction(newTx);
        setTitle('');
        setAmount('');
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input ref={inputRef} value={title} onChange={e => setTitle(e.target.value)} placeholder="Transaction Title" required />
            <input value={amount} onChange={e => setAmount(e.target.value)} type="number" step="0.01" placeholder="Amount" required />
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button type="submit">Add</button>
        </form>
    );
};

export default TransactionForm;
