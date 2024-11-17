'use client'
import { useState } from 'react'
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline'

export default function ContactSection() {
    // const [loading, setLoading] = useState(false)

    // const handleSubmit = () => {
    //     setLoading(true)
    // }
    const [status, setStatus] = useState<
        'pending' | 'success' | 'error' | null
    >(null) // To track the submission status
    const [error, setError] = useState<string | null>(null) // To handle submission errors

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        try {
            setStatus('pending')
            setError(null)

            const form = event.target as HTMLFormElement
            const formData = new FormData(form)

            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(
                    Array.from(formData.entries()).map(([key, value]) => [
                        key,
                        value.toString(),
                    ])
                ).toString(),
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
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                {/* Contact Information Section */}
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M130 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="white"
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                />
                                <svg
                                    x="100%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-470.5 0h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                />
                            </svg>
                        </div>
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            We&apos;re here to help with your pest and weed
                            control needs. Reach out for a free quote or any
                            questions you may have.
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon
                                        aria-hidden="true"
                                        className="h-7 w-6 text-gray-400"
                                    />
                                </dt>
                                <dd>
                                    8644 Mock Heather Rd NW
                                    <br />
                                    Albuquerque, NM 87120
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon
                                        aria-hidden="true"
                                        className="h-7 w-6 text-gray-400"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        href="tel:+15054502772"
                                        className="hover:text-gray-900"
                                    >
                                        (505) 450-2772
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon
                                        aria-hidden="true"
                                        className="h-7 w-6 text-gray-400"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        href="mailto:contact@jdpestcontrol.com"
                                        className="hover:text-gray-900"
                                    >
                                        contact@janddpestcontrol.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Contact Form Section */}
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit}
                    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
                            {/* Phone */}
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
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
                                {status === 'pending'
                                    ? 'Sending...'
                                    : 'Send message'}
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
                                <p className="text-sm text-red-700">
                                    Error: {error}
                                </p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
