import facebook from '../../public/facebook-new-2019-seeklogo-3.svg'
import yelp from '../../public/yelp-seeklogo.svg'
import nextdoor from '../../public/nextdoor-seeklogo-2.svg'

const navigation = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61564926555448&mibextid=LQQJ4d',
        icon: (props: React.HTMLAttributes<HTMLImageElement>) => (
            <img src={facebook.src} alt="Facebook" {...props} />
        ),
    },
    {
        name: 'Yelp',
        href: 'https://www.yelp.com/biz/j-and-d-pest-control-albuquerque',
        icon: (props: React.HTMLAttributes<HTMLImageElement>) => (
            <img src={yelp.src} alt="Yelp" {...props} />
        ),
    },
    {
        name: 'Nextdoor',
        href: 'https://nextdoor.com/pages/jd-pest-control-albuquerque-nm',
        icon: (props: React.HTMLAttributes<HTMLImageElement>) => (
            <img src={nextdoor.src} alt="Nextdoor" {...props} />
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center gap-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 hover:text-gray-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-sm text-gray-600 md:order-1 md:mt-0">
                    &copy; {new Date().getFullYear()} J&D Pest Control, Inc. All
                    rights reserved.
                </p>
            </div>
        </footer>
    )
}
