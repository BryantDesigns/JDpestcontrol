'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function ThemeToggle() {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setEnabled(storedTheme === 'dark')
            document.documentElement.classList.add(storedTheme)
        } else {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
            setEnabled(prefersDark)
            document.documentElement.classList.add(
                prefersDark ? 'dark' : 'light'
            )
        }
    }, [])

    const toggleTheme = (checked: boolean) => {
        setEnabled(checked)
        const newTheme = checked ? 'dark' : 'light'
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <Switch
            checked={enabled}
            onChange={toggleTheme}
            className={`${
                enabled ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
        >
            <span className="sr-only">Toggle dark mode</span>
            <span
                aria-hidden="true"
                className={`${
                    enabled ? 'translate-x-5' : 'translate-x-0'
                } inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}
