import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
    return (
        <TransactionProvider>
            <div className="app">
                <ThemeToggle />
                <h1>Smart Budget Tracker</h1>
                <BalanceDisplay />
                <TransactionForm />
                <TransactionList />
            </div>
        </TransactionProvider>
    );
};

export default App;
