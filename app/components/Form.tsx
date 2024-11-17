'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [status, setStatus] = useState<'pending' | 'success' | 'error' | null>(null) // To track the submission status
    const [error, setError] = useState<string | null>(null) // To handle submission errors

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() 
        try {
            setStatus('pending')
            setError(null)

            const form = event.target as HTMLFormElement
            const formData = new FormData(form)

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])).toString(),
            })

            if (response.ok) {
                setStatus('success')
                form.reset() // Reset the form on success
            } else {
                setStatus('error')
                setError(`${response.status} ${response.statusText}`)
            }
        } catch (err) {
            setStatus('error')
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('An unknown error occurred')
            }
        }
    }

    return (
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit}
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="debug" value="true" />
                <div className="hidden">
                    <label>
                        Don&apos;t fill this out if you&apos;re human:
                        <input name="bot-field" />
                    </label>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jdpestcontrol-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jdpestcontrol-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jdpestcontrol-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jdpestcontrol-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className={`rounded-md ${
                            status === 'pending'
                                ? 'cursor-not-allowed bg-gray-400'
                                : 'bg-jdpestcontrol-500'
                        } px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-jdpestcontrol-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jdpestcontrol-500`}
                        disabled={status === 'pending'}
                    >
                        {status === 'pending' ? 'Sending...' : 'Send message'}
                    </button>
                </div>
                {/* Feedback Messages */}
                {status === 'success' && (
                    <div className="mt-4 rounded-md bg-green-50 p-4">
                        <p className="text-sm text-green-700">
                            Message sent successfully!
                        </p>
                    </div>
                )}
                {status === 'error' && (
                    <div className="mt-4 rounded-md bg-red-50 p-4">
                        <p className="text-sm text-red-700">Error: {error}</p>
                    </div>
                )}
            </form>
        </div>
    )
}
