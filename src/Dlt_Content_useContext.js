import { useState, createContext } from 'react'
import Block from "./Block";
import './App.css'

// Context
// CompA => CompB => CompC -> CompA => CompC

// Theme: Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

export const ThemeContext = createContext();

function Content() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Block />
            </div>
        </ThemeContext.Provider>
    )
}

export default Content;