import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.body.className = dark ? 'dark' : '';
    }, [dark]);

    return (
        <button onClick={() => setDark(prev => !prev)} className="theme-toggle">
            {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;
