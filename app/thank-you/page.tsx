export default function ThankYouPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold text-jdpestcontrol-500">
                Thank You!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                Your message has been successfully submitted. We will get back
                to you as soon as possible.
            </p>
            <a
                href="/"
                className="mt-6 rounded-md bg-jdpestcontrol-500 px-4 py-2 text-white hover:bg-jdpestcontrol-600 focus:outline-none focus:ring-2 focus:ring-jdpestcontrol-500 focus:ring-offset-2"
            >
                Back to Home
            </a>
        </div>
    )
}
