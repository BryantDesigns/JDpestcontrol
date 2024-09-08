import Image from 'next/image'
import BG from '../public/assets/bg.svg'
import logo from '../public/jd-logo.svg'

export default function Home() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center py-10">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    alt="Background Image"
                    src={BG}
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Logo and Text */}
            <div className="relative h-64 w-[90%] sm:h-96 sm:w-[75%] md:h-[500px] lg:h-[600px]">
                <Image
                    alt="J & D Pest Control Logo"
                    src={logo}
                    layout="intrinsic"
                    className="rounded-lg"
                />
                <div className="mt-8 text-center">
                    <h1 className="text-4xl font-bold text-[#3390AC] sm:text-6xl">
                        Under Construction
                    </h1>
                    <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                        Coming Soon
                    </h2>
                    <p className="mt-4 text-lg text-black sm:text-xl">
                        Please reach out to{' '}
                        <a
                            href="tel:+15054502772"
                            className="text-[#fff] underline hover:text-[#2a6c81]"
                        >
                            (505) 450-2772
                        </a>{' '}
                        to schedule your visit today!
                    </p>
                </div>
            </div>
        </div>
    )
}
