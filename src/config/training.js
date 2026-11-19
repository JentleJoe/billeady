/**
 * Settings for the /TRCC landing page (The Remote Closers Club).
 * Edit values here — the page reads everything from this file.
 */

// Every "join" button on the page opens this link.
export const TRAINING_WHATSAPP_URL = 'https://wa.link/ep4exm'

/**
 * Images live in /public/images/training/. While a value is null the page shows a
 * labelled placeholder frame. To add or swap an image, drop the file into
 * /public/images/training/ and set { src, width, height } (width/height = the file's
 * pixel size; they stop the page jumping while it loads). A plain path string
 * like '/images/training/my-image.webp' also works.
 */
export const TRAINING_IMAGES = {
  // Hero: crypto wallet balance screenshot (shown frameless)
  heroImage: { src: '/images/training/crypto-wallet-balance.webp', width: 1000, height: 1233 },
  // About: WhatsApp DM from Carlos (Eco-Resort, Indonesia)
  carlosDm: { src: '/images/training/carlos-dm.webp', width: 900, height: 826 },
  // Program: member portal on MacBook + iPhone
  portalMockup: { src: '/images/training/portal-mockup.webp', width: 1400, height: 933 },
  // Real World Receipts gallery, in display order. Add or remove entries freely.
  // alt = a short description for screen readers (not shown on the page).
  receipts: [
    { src: '/images/training/student-commission.webp', width: 900, height: 923, alt: 'Student message: $8k done in two months on a SaaS offer, with another $3.4k commission due' },
    { src: '/images/training/receipt-9k-commission.webp', width: 900, height: 719, alt: 'Student message: total paid commission just crossed $9k for setting and remote closing' },
    { src: '/images/training/receipt-monthly-results.webp', width: 900, height: 1035, alt: 'Student message: last month was $3,125, and already up $818 this month' },
    { src: '/images/training/receipt-automation-agencies.webp', width: 900, height: 1266, alt: 'Student message about booking more appointments with automation agencies and aiming to close the month with $4k' },
    { src: '/images/training/receipt-first-commission.webp', width: 900, height: 1239, alt: 'Student message: the training did not disappoint, with $440 commission paid so far' },
    { src: '/images/training/receipt-uk-setter-role.webp', width: 900, height: 1423, alt: 'Student message: selected and approved as a setter by a UK company that provides the leads' },
    { src: '/images/training/receipt-partnership-email.webp', width: 900, height: 795, alt: 'Email with the subject: Commission-only partnership, selling websites to US small businesses' },
    { src: '/images/training/receipt-closer-agreement.webp', width: 900, height: 679, alt: 'Signature page of a closer agreement listing Billeddy Saliu as the closer' },
  ],
  // Client calls (shown under the mentor section) (a list — add or remove entries freely)
  proofClientCalls: [
    { src: '/images/training/client-call-1.webp', width: 900, height: 1948 },
    { src: '/images/training/zoom-closing-call.webp', width: 900, height: 1500 },
    { src: '/images/training/client-call-2.webp', width: 900, height: 1848 },
    { src: '/images/training/client-call-3.webp', width: 900, height: 1860 },
    { src: '/images/training/client-call-4.webp', width: 900, height: 1948 },
    { src: '/images/training/client-call-5.webp', width: 900, height: 1119 },
  ],
}
