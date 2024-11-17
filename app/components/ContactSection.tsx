'use client'
// import { useState } from 'react'
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
    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                {/* Contact Information Section */}
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Get in touch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We&apos;re here to help with your pest and weed
                            control needs. Reach out for a free quote or any
                            questions you may have.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
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
                    action="/thank-you"
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
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-jdpestcontrol-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-jdpestcontrol-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jdpestcontrol-500"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
