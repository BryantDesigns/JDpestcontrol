export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-50">{children}</body>
        </html>
    )
}
