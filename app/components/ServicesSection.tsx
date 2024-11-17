import { BugAntIcon, NoSymbolIcon, HomeIcon, BuildingOffice2Icon, MagnifyingGlassIcon, ShieldExclamationIcon} from '@heroicons/react/24/outline'

const services = [
    {
        name: 'Mosquito Control',
        description:
            'Enjoy your yard without mosquitos! We offer fogging and In2Care stations to eliminate mosquito problems between April and October.',
        href: '#',
        icon: BugAntIcon,
    },
    {
        name: 'Rodent Control',
        description:
            'Protect your home or business from mice and rats. We provide inspections and effective treatment plans to ensure a rodent-free environment.',
        href: '#',
        icon: NoSymbolIcon,
    },
    {
        name: 'Weed Control',
        description:
            'Our herbicide program offers full property treatment in spring and fall to eliminate weeds and prevent new growth.',
        href: '#',
        icon: ShieldExclamationIcon,
    },
    {
        name: 'Termite Inspections',
        description:
            'Protect your home with thorough termite inspections. Our expert team identifies infestations and provides effective solutions to safeguard your property.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Residential Pest Control',
        description:
            'Comprehensive pest control solutions for your home. Safe and effective treatments to keep your living spaces pest-free.',
        icon: HomeIcon,
    },
    {
        name: 'Commercial Pest Control',
        description:
            'Professional pest management services tailored for businesses. Maintain a clean and pest-free environment for your customers and employees.',
        icon: BuildingOffice2Icon,
    },
]

export default function ServicesSection() {
    return (
        <div className="bg-gray-200 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-jdpestcontrol-500 text-base font-semibold leading-7">
                        Pest Control Services
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Comprehensive Solutions for Every Pest
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At J&D Pest Control, we provide specialized treatments
                        for various pests and weeds to ensure your home and
                        business are protected year-round. Explore our services
                        below.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <service.icon
                                        aria-hidden="true"
                                        className="text-jdpestcontrol-500 h-5 w-5 flex-none"
                                    />
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        {service.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
