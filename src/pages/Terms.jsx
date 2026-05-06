import { Link } from 'react-router-dom'

const Terms = () => {
  const effectiveDate = 'May 6, 2026'

  return (
    <main className="w-full bg-white">
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mt-3">Effective date: {effectiveDate}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            These Terms & Conditions ("Terms") govern your use of this website and any related
            content, resources, or services offered by Billeady Saliu ("we", "us", "our"). By accessing
            or using this site, you agree to these Terms.
          </p>

          <h2>Use of the Website</h2>
          <ul>
            <li>You agree not to misuse the site, attempt unauthorized access, or disrupt service.</li>
            <li>You agree not to upload or transmit harmful, unlawful, or infringing material.</li>
            <li>
              You are responsible for ensuring that your use of the site complies with applicable laws
              and regulations.
            </li>
          </ul>

          <h2>Educational Content & No Guarantees</h2>
          <p>
            Content on this site may include educational material related to sales, marketing, and
            high-ticket closing. Outcomes vary based on many factors, and we do not guarantee
            specific results.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All site content (including text, graphics, branding, and design) is owned by or licensed to
            us and is protected by applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works without prior written permission.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            We may link to third-party websites or platforms. We do not control, endorse, or assume
            responsibility for their content or practices.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or revenues, arising from
            your use of the site.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these Terms from time to time. We’ll update the effective date at the top
            when changes are made.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Reach out via the <Link to="/contact">Contact</Link> page.
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

export default Terms
