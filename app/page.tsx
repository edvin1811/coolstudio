import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Coolstudio</h1>
          <p className="text-xl text-gray-600">Creating simple, useful apps</p>
        </header>

        {/* Apps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Apps</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Beerly */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl mb-4 flex items-center justify-center text-3xl">
                🍺
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Beerly</h3>
              <p className="text-gray-600 mb-4">
                Find the best beer prices near you. Discover local deals on a map and share prices with the community.
              </p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Available Now
              </span>
            </div>

            {/* Sharp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-4 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sharp</h3>
              <p className="text-gray-600 mb-4">
                Stay focused and productive. Block distracting apps and take control of your screen time.
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </main>
  );
}
