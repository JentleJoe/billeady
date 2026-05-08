import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const effectiveDate = 'May 6, 2026'

  return (
    <main className="w-full bg-white">
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-14 sm:pt-20 md:pt-24 pb-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-3">Effective date: {effectiveDate}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            This Privacy Policy explains how Billeddy Saliu ("we", "us", "our") collects, uses, and
            protects information when you visit this website or contact us.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> such as your name, email address, and any details
              you submit via forms or messages.
            </li>
            <li>
              <strong>Usage information:</strong> basic data about how you use the site (e.g., pages
              viewed, approximate location, device/browser type) collected through standard analytics or
              server logs.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries and provide requested information.</li>
            <li>To improve site performance, content, and user experience.</li>
            <li>To prevent fraud, abuse, and security issues.</li>
            <li>To send updates you requested (where applicable), with an option to unsubscribe.</li>
          </ul>

          <h2>Cookies & Similar Technologies</h2>
          <p>
            We may use cookies or similar technologies to keep the site working properly and to
            understand how visitors interact with our content. You can control cookies through your
            browser settings.
          </p>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service
            providers who help us operate the site (e.g., hosting, analytics), only as necessary and
            subject to appropriate safeguards.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information only for as long as needed to fulfill the purposes described
            in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no method of
            transmission or storage is completely secure.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This site may link to third-party platforms (e.g., social media). We are not responsible for
            their privacy practices. Please review their policies.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We’ll update the effective date at the
            top when changes are made.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact us via the <Link to="/contact">Contact</Link> page.
          </p>

          <p className="text-sm text-gray-500">
            This page is provided for general informational purposes and does not constitute legal
            advice.
          </p>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
