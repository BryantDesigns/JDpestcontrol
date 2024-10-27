'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import logo from '../../public/jd-logo.svg'

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="fixed left-0 top-0 z-50 w-full bg-gray-200 shadow"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/* Logo Section */}
                                <div className="flex-shrink-0">
                                    <Link href="/" passHref>
                                        <Image
                                            src={logo}
                                            alt="J&D Pest Control"
                                            width={48} // Adjusted the width
                                            height={48} // Adjusted the height
                                            className="cursor-pointer"
                                        />
                                    </Link>
                                </div>
                                {/* Navigation Links */}
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <Link
                                        href="/services"
                                        className="hover:border-jdpestcontrol-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-900"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="hover:border-jdpestcontrol-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-900"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="hover:border-jdpestcontrol-500 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-800 hover:text-gray-900"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            {/* Theme Toggle */}
                            <div className="flex items-center">
                                <ThemeToggle />
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            <Link
                                href="/services"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:bg-gray-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:bg-gray-300"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-800 hover:bg-gray-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
