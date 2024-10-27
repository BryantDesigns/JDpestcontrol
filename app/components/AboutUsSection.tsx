import {
    ShieldCheckIcon,
    UsersIcon,
    BriefcaseIcon,
} from '@heroicons/react/24/outline'

const values = [
    {
        name: 'Personalized Service',
        description:
            'With the same technician for every visit, we ensure you always see a familiar face providing A+ customer service tailored to your needs.',
        icon: UsersIcon,
    },
    {
        name: 'Professionalism and Expertise',
        description:
            'With over 10 years of experience, our certified team delivers premium pest control solutions for both residential and commercial clients.',
        icon: BriefcaseIcon,
    },
    {
        name: 'Safety and Reliability',
        description:
            'We prioritize the safety of your family and environment by using pet and kid-friendly treatments and proven pest control methods.',
        icon: ShieldCheckIcon,
    },
]

export default function AboutUsSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: 'url(/test.png)',
                }}
            ></div>
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3390AC] to-[#3A6DA3] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        About Us
                    </h2>
                    <p className="mt-8 text-lg leading-8 text-gray-400">
                        J&D Pest Control is a local, family-owned business
                        founded in 2024 and named after my sons Jaidan and
                        Domacio. With over 10 years of experience, our mission
                        is to provide premium pest and herbicide services. We
                        pride ourselves on offering personalized, professional
                        service and building lasting relationships with our
                        customers.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {values.map((value) => (
                        <div
                            key={value.name}
                            className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
                        >
                            <value.icon
                                aria-hidden="true"
                                className="text-jdpestcontrol-500 h-7 w-5 flex-none"
                            />
                            <div className="text-base leading-7">
                                <h3 className="font-semibold text-white">
                                    {value.name}
                                </h3>
                                <p className="mt-2 text-gray-300">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
