'use client'
// import { useState } from 'react'
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline'
import Form from './Form'

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
                <Form />
            </div>
        </div>
    )
}
