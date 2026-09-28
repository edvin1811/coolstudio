import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link href="/" className="text-gray-600 hover:text-gray-900 mb-8 inline-block">
          ← Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            This policy describes the data types we collect and how we use them.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 28, 2026</p>
        </header>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Types</h2>
            <p className="text-gray-700 mb-4">
              We collect 5 data types from this app:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Precise Location</li>
              <li>Photos or Videos</li>
              <li>User ID</li>
              <li>Email Address</li>
              <li>Product Interaction (only if you allow it)</li>
            </ul>
          </section>

          {/* Contact Info */}
          <section className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Info</h3>

            <div className="ml-4">
              <h4 className="font-medium text-gray-900 mb-2">Email Address</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used for App Functionality</li>
                <li>Linked to the user's identity</li>
              </ul>
            </div>
          </section>

          {/* Location */}
          <section className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>

            <div className="ml-4">
              <h4 className="font-medium text-gray-900 mb-2">Precise Location</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used for App Functionality</li>
              </ul>
            </div>
          </section>

          {/* User Content */}
          <section className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Content</h3>

            <div className="ml-4">
              <h4 className="font-medium text-gray-900 mb-2">Photos or Videos</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used for App Functionality</li>
                <li>Linked to the user's identity</li>
              </ul>
            </div>
          </section>

          {/* Identifiers */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Identifiers</h3>

            <div className="ml-4">
              <h4 className="font-medium text-gray-900 mb-2">User ID</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used for App Functionality</li>
                <li>Used for Analytics (only if you allow it)</li>
                <li>Linked to the user's identity</li>
              </ul>
            </div>
          </section>

          {/* Usage Data */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Data</h3>

            <div className="ml-4">
              <h4 className="font-medium text-gray-900 mb-2">Product Interaction</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used for Analytics</li>
                <li>Linked to the user's identity</li>
                <li>Only collected if you allow it</li>
              </ul>
            </div>
          </section>

          {/* Analytics */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h3>
            <div className="text-gray-700 space-y-3">
              <p>
                Beerly asks before collecting any usage data. If you say yes, we record which screens
                and buttons you use, and screen recordings of the app to see where people get stuck.
                Anything you type is hidden in those recordings.
              </p>
              <p>
                This data is processed by PostHog on servers in the EU. It is tied to your account ID,
                never to your email address, and it is never sold or used for advertising or tracking
                across other apps.
              </p>
              <p>
                If you say no, nothing is sent. You can change your answer at any time under
                Profile → Share usage data.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
