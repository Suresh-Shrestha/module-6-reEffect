import React from 'react';
import useTransactions from '../hooks/useTransactions';

const BalanceDisplay = () => {
    const { balance } = useTransactions();
    return (
        <div className="balance">
            <h2>Current Balance</h2>
            <h3>${balance.toFixed(2)}</h3>
        </div>
    );
};

export default BalanceDisplay;
