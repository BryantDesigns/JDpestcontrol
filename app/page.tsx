import ServicesSection from '@/components/ServicesSection'
import AboutUsSection from '@/components/AboutUsSection'
import ContactSection from 'pages/components/ContactSection'

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
