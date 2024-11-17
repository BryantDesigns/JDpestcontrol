'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../public/jd-logo.svg'
import bannerImage from '../../public/assets/IMG_4426.jpeg'

const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <div className="mx-auto max-w-7xl">
                    <div className="pl-6 pt-6 lg:max-w-2xl lg:pl-4 lg:pr-0">
                        <nav
                            aria-label="Global"
                            className="flex items-center justify-between lg:justify-start"
                        >
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">
                                    J&D Pest Control
                                </span>
                                <Image
                                    src={logo}
                                    alt="J&D Pest Control"
                                    className="h-20 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="0.375rem rounded-md p-2.5 text-gray-700 lg:hidden"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                />
                            </button>
                            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">
                                    J&D Pest Control
                                </span>
                                <Image
                                    src={logo}
                                    alt="J&D Pest Control"
                                    className="h-20 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                            onClick={handleMobileLinkClick}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <div className="hidden sm:mb-10 sm:flex"></div>
                                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                    Affordable Premium Pest Control Services
                                </h1>
                                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                    Kid and pet-friendly same-day and next-day
                                    pest control services. Serving Albuquerque
                                    and surrounding areas for over 10 years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
                    <Image
                        alt=""
                        src={bannerImage}
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                        width={1587}
                        height={1057}
                    />
                </div>
            </div>
        </div>
    )
}
