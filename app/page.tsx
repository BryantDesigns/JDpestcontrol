import ServicesSection from '@/components/ServicesSection'
import AboutUsSection from '@/components/AboutUsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
    return (
        <main>
            {/* Services Section */}
            <section id="services">
                <ServicesSection />
            </section>
            {/* About Us Section */}
            <section id="about">
                <AboutUsSection />
            </section>
            {/* Contact Section */}
            <section id="contact">
                <ContactSection />
            </section>
        </main>
    )
}
