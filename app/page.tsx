import Image from 'next/image'
import BG from '../public/assets/bg.svg'
import logo from '../public/jd-logo.svg'
import ServicesSection from '@/components/ServicesSection'
import AboutUsSection from '@/components/AboutUsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
    return (
        <main>
            {/* Services Section */}
            <ServicesSection />

            {/* About Us Section */}
            <AboutUsSection />

            {/* Contact Section */}
            <ContactSection />
        </main>
    )
}
