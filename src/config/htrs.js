/**
 * Settings for the /HTRS landing page (Remote High Ticket Sales Coaching).
 * Edit values here — the page reads its links and images from this file.
 */

// Every booking button on the page opens this link (new tab).
export const HTRS_CALENDLY_URL = 'https://calendly.com/billeddysaliu1/strategy-and-discovery-call'

// Browser-tab title and description while the page is open (the static copy for
// link previews lives in index.html here, and in vite.config.js once integrated).
export const HTRS_META = {
  title: 'Remote High Ticket Sales Coaching | Billeddy Saliu',
  description:
    'Master the Diagnostic Closing Framework behind $2.1M+ in closed high ticket deals and secure placements on inbound, high converting 7 figure offers. Private coaching for aspiring high ticket closers and sales professionals.',
}

/**
 * IMAGE MAP — every image on the page is listed here.
 *
 * While `src` is null the page shows a labelled placeholder frame at the intended
 * proportions. To add a real image:
 *   1. Export it at (at least) the recommended size, ideally as .webp.
 *   2. Put it in /public/images/htrs/ (testimonial photos in /public/images/htrs/testimonials/).
 *   3. Set `src` to its path (the `file` value below is the suggested name) and set
 *      `width` / `height` to the file's real pixel size (stops the page jumping while it loads).
 *
 * `ratio` is the frame the design reserves for the image. Photos are cropped to fill it
 * (`fit: 'cover'`); screenshots keep their own proportions (`fit: 'natural'`).
 * `alt` is read by screen readers; update it to describe the final image.
 * Optional `position` (CSS object-position, e.g. '50% 30%') sets the focal point for cropped photos.
 */
export const HTRS_IMAGES = {
  heroWalletBalance: {
    name: 'Crypto Wallet Balance',
    note: 'Phone screenshot of a crypto wallet balance, shown whole (uncropped)',
    file: '/images/htrs/crypto-wallet-balance.webp',
    recommended: '1200 × 1480',
    ratio: '1200 / 1480',
    fit: 'natural',
    alt: 'Crypto wallet showing a total balance of $125,446.40, mostly held in USDT',
    src: '/images/htrs/crypto-wallet-balance.webp',
    width: 1200,
    height: 1480,
  },
  zoomClosingCall: {
    name: 'Live Zoom Closing Call',
    note: 'Screenshot of Billeddy on a live Zoom call calmly closing an international prospect',
    file: '/images/htrs/zoom-closing-call.webp',
    recommended: '1600 × 1000',
    ratio: '866 / 900',
    fit: 'natural',
    // Supplied as a full phone screenshot; trimmed to the call itself (empty grey padding and phone borders removed).
    alt: 'Billeddy Saliu on a live video call with an international prospect',
    src: '/images/htrs/zoom-closing-call.webp',
    width: 866,
    height: 900,
  },
  billeddyHeadshot: {
    name: 'Billeddy Saliu Headshot',
    note: 'Professional, high-status headshot',
    file: '/images/htrs/billeddy-headshot.webp',
    recommended: '1200 × 1200',
    ratio: '1 / 1',
    fit: 'natural',
    alt: 'Portrait of Billeddy Saliu',
    src: '/images/htrs/billeddy-headshot.webp',
    width: 1200,
    height: 1200,
  },
  carlosWhatsappDm: {
    name: 'Founder WhatsApp DM (Carlos)',
    note: 'WhatsApp DM from Carlos (Eco-Resort Sumba, Indonesia founder) asking for trained closers paying €100–€300',
    file: '/images/htrs/carlos-whatsapp-dm.webp',
    recommended: '900 × 1100',
    ratio: '12 / 11',
    fit: 'natural',
    alt: 'Message from Carlos, founder of an eco-resort community in Indonesia, hiring a closer at €100 per close, up to €300',
    src: '/images/htrs/carlos-whatsapp-dm.webp',
    width: 1200,
    height: 1102,
  },
  studentSetterChat: {
    name: 'US Student Setter Role Chat',
    note: 'WhatsApp chat from a US student landing a setter role',
    file: '/images/htrs/student-setter-offer-chat.webp',
    recommended: '900 × 1600',
    ratio: '1200 / 1341',
    fit: 'natural',
    alt: 'WhatsApp chat: a US student replies “I’ve landed an offer this is week 2” and is congratulated',
    src: '/images/htrs/student-setter-offer-chat.webp',
    width: 1200,
    height: 1341,
  },
}

/**
 * Testimonial photos, keyed by the `id` used in src/content/htrs.js.
 * Shown as a 4:5 portrait in the reader and as a round thumbnail in the student list.
 * `position` (CSS object-position) keeps each face in frame when the photo is cropped.
 */
export const HTRS_TESTIMONIAL_IMAGES = {
  'daniel-brooks': {
    name: 'Testimonial Daniel Brooks',
    file: '/images/htrs/testimonials/daniel-brooks.webp',
    position: '50% 30%',
    src: '/images/htrs/testimonials/daniel-brooks.webp',
    width: 640,
    height: 639,
  },
  'olivia-bennett': {
    name: 'Testimonial Olivia Bennett',
    file: '/images/htrs/testimonials/olivia-bennett.webp',
    position: '50% 28%',
    src: '/images/htrs/testimonials/olivia-bennett.webp',
    width: 640,
    height: 953,
  },
  'marcus-reed': {
    name: 'Testimonial Marcus Reed',
    file: '/images/htrs/testimonials/marcus-reed.webp',
    position: '50% 30%',
    src: '/images/htrs/testimonials/marcus-reed.webp',
    width: 640,
    height: 627,
  },
  'chloe-mitchell': {
    name: 'Testimonial Chloe Mitchell',
    file: '/images/htrs/testimonials/chloe-mitchell.webp',
    position: '50% 30%',
    src: '/images/htrs/testimonials/chloe-mitchell.webp',
    width: 640,
    height: 624,
  },
  'ethan-clarke': {
    name: 'Testimonial Ethan Clarke',
    file: '/images/htrs/testimonials/ethan-clarke.webp',
    position: '50% 32%',
    src: '/images/htrs/testimonials/ethan-clarke.webp',
    width: 640,
    height: 752,
  },
}

// Shared settings for all testimonial photos.
export const TESTIMONIAL_IMAGE_SPEC = { recommended: '800 × 1000', ratio: '4 / 5' }
