import adProof from '../assets/adproof.PNG'
import htcapProof1 from '../assets/htcapProof1.PNG'
import htcapProof2 from '../assets/htcapProof2.PNG'
import htcapProof3 from '../assets/htcapProof3.PNG'
import htcapProof4 from '../assets/htcapProof4.PNG'
import htcapProof5 from '../assets/htcapProof5.PNG'

const ctaMessage = `Hello Billeddy, I will love to book a call session with you.

My name is……`

const ctaLabel = "BOOK A CALL WITH ME - I'LL QUALIFY YOU TO SEE IF YOU'RE A BEST FIT FOR THIS"

const ctaLink = `https://wa.me/2347069487679?text=${encodeURIComponent(ctaMessage)}`

function CtaButton({ children, className = '' }) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-none border border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[var(--color-brand-primary)] motion-reduce:animate-none animate-float ${className}`}
      href={ctaLink}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

function CtaRow() {
  return (
    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <CtaButton>{ctaLabel}</CtaButton>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/60">
        <span className="h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
        Spots are limited
      </div>
    </div>
  )
}

function ProofImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-md border border-black/10 bg-white">
      <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
    </div>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-black">
      <span className="h-0.5 w-6 bg-[var(--color-brand-accent)]" />
      {children}
    </h2>
  )
}

function Htcap() {
  return (
    <main className="min-h-screen bg-page-tint text-black">
      <div className="h-1 w-full bg-[var(--color-brand-accent)]" />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="border border-black/10 bg-white shadow-[0_18px_50px_rgba(109,30,23,0.08)]">
          <div className="border-b border-black/10 px-6 py-8 sm:px-10 sm:py-12">
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
              I Was $30,000 In Debt, Homeless, And Had Suicidal Thoughts. Then One Skill Paid Me $2,000 In A
              Single Transaction And I&apos;ve Never Looked Back.
            </h1>

            <div className="mt-6 border-l-2 border-[var(--color-brand-accent)] pl-4">
              <div className="mt-3 space-y-4 text-base leading-relaxed text-black/80">
                <p>
                  My name is Billeddy Saliu. I work remote in the US market closing high-ticket deals and
                  setting appointments for international brands from Nigerian. This year alone I&apos;ve made
                  $39,000 in commissions. No product. No degree needed. No boss And I&apos;m now teaching
                  Africans how to do the exact same thing.
                </p>
                <ProofImage src={adProof} alt="$39k earnings screenshot" />
              </div>
            </div>

            <CtaRow />
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="space-y-4 text-black/80">
              <p className="font-semibold text-black">This skill has no passport requirement.</p>
              <p>
                It doesn&apos;t matter if you&apos;re in Nigeria, Accra, Nairobi, Johannesburg, Douala, or
                Kampala. If you have a phone and internet, you can earn in dollars.
              </p>
              <p>
                There is a skill not crypto, not dropshipping, not graphics, not data entry that pays you in
                dollars every single month, with zero capital, zero product, and zero guesswork.
              </p>
              <p>
                It&apos;s called High-Ticket Closing and Appointment Setting.
              </p>
              <p>And right now, most Africans don&apos;t even know it exists.</p>
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>
                From $30,000 Debt And No Roof Over My Head To $39,000 This Year Alone
              </SectionHeading>
              <div className="mt-4 space-y-4 text-black/80">
                <p>
                  In 2020 I was just a regular guy doing graphic design on Canva. Nothing special. Trying to
                  survive like everyone else.
                </p>
                <p>
                  Then I discovered high-ticket sales and started closing deals. Life was decent. I was making
                  progress.
                </p>
                <p>Then 2022 happened.</p>
                <p>
                  I got into a bad business deal. A terrible one. And when the dust settled, I was staring at
                  a debt worth over $30,000 most of it not even entirely mine. I lost everything I had. My
                  savings. My dignity. The roof over my head Gone.
                </p>
                <p>
                  I won&apos;t sugarcoat what that period felt like. I had suicidal thoughts. Dark days I
                  don&apos;t wish on anyone. People I thought were solid disappeared. I was starting from less
                  than zero.
                </p>
                <p>
                  But I knew one thing I needed money fast, and I needed a skill that could earn regardless of
                  which African country I was in, regardless of what the local currency was doing, regardless
                  of who was in power.
                </p>
                <p>
                  So I went all in on high-ticket commission sales and appointment setting. Working for
                  international clients coaches, consultants, agency owners, real estate developers.
                  Commission only. No salary safety net. Just pure performance.
                </p>
                <p className="font-semibold text-black">
                  My first payment hit $2,000 in a single transaction.
                </p>
                <p>
                  That was the moment everything shifted. I went back to back on commission high ticket sales.
                </p>
                <p>
                  I cleared my debt. I rebuilt my life. I got back on my feet stronger, smarter, and with a
                  skill that no African economy can touch.
                </p>
                <p className="font-semibold text-black">This year alone I have made $39,000.</p>
                <ProofImage src={adProof} alt="Screenshot of earnings" />
                <p>That is the power of this skill. And I want to show you how you too can get started.</p>
              </div>
              <CtaRow />
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>So What Exactly Is High-Ticket Closing And Appointment Setting?</SectionHeading>
              <div className="mt-4 space-y-4 text-black/80">
                <p>Simple.</p>
                <p>
                  Appointment Setting means you reach out to people who might be interested in a premium offer
                  a coaching program, a mastermind, a service, real estate and you book them on a call with
                  the business owner or closer. You get paid per qualified appointment in dollars.
                </p>
                <p>
                  High-Ticket Closing means you&apos;re the one on that call. You talk to the prospect, handle
                  their hesitations, and guide them to a buying decision. When they pay, you earn a commission
                  typically 10–20% of the deal.
                </p>
                <p>Close a $3,000 deal → you earn $300–$600. From one conversation.</p>
                <p>Close 5 in a month → that&apos;s $1,500–$3,000.</p>
                <p>Close 10 → do the math yourself.</p>
                <p className="font-semibold text-black">
                  No product. No ads budget. No startup capital. Just skill.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>This Is Built For You If…</SectionHeading>
              <ul className="mt-4 list-none space-y-3 text-black/80">
                <li>✅ You&apos;re a student who is tired of waiting for a system that was never built for you</li>
                <li>
                  ✅ You&apos;re in a 9–5 earning local currency that loses value every single month and
                  you&apos;re done pretending that&apos;s okay
                </li>
                <li>
                  ✅ You&apos;re already hustling online maybe doing graphics, social media management,
                  copywriting, or any other digital skill but your income is inconsistent, unpredictable, and
                  stressing you out
                </li>
                <li>
                  ✅ You&apos;re in Ghana, Kenya, South Africa, Cameroon, Uganda, Zimbabwe anywhere on this
                  continent where your local currency is losing the fight against the dollar
                </li>
                <li>
                  ✅ You want controlled, consistent, and predictable dollar income not hoping and praying every
                  month
                </li>
                <li>
                  ✅ You&apos;re willing to learn, put in the work, and follow a proven system built by someone
                  who has done it from this same continent
                </li>
              </ul>
              <p className="mt-6 font-semibold text-black">If that&apos;s you, this call is for you.</p>
              <CtaRow />
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>Inside The Mentorship, Here&apos;s What I&apos;ll Personally Walk You Through:</SectionHeading>
              <ul className="mt-4 list-none space-y-3 text-black/80">
                <li>
                  ✅ The exact mindset and positioning that makes international clients trust an African closer
                  with their high-ticket sales
                </li>
                <li>
                  ✅ How to land your first closer or setter role even with zero experience using cold DM
                  systems that actually work
                </li>
                <li>
                  ✅ Word-for-word scripts for reaching out to coaches, agency owners, and consultants in the
                  US, UK, and Canada
                </li>
                <li>
                  ✅ How to handle every objection you&apos;ll ever face on a closing call (&quot;I need to
                  think about it,&quot; &quot;I don&apos;t have the money,&quot; &quot;Let me talk to my
                  partner&quot; ) without pressure, without manipulation
                </li>
                <li>✅ How to run a closing call from the first hello to the payment link step by step</li>
                <li>
                  ✅ How to receive dollar commissions directly into your account from anywhere in Africa
                  without the stress
                </li>
                <li>
                  ✅ My personal appointment setting system that books qualified calls consistently the same
                  one I still use till today
                </li>
                <li>
                  ✅ How to build your reputation fast so clients come looking for you instead of the other way
                  around
                </li>
              </ul>
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <h2 className="flex items-start gap-3 text-2xl font-semibold leading-tight text-black sm:text-3xl">
                <span className="mt-2 h-1 w-8 shrink-0 bg-[var(--color-brand-accent)]" />
                This Isn&apos;t Just My Story. My Students Are Living It Too.
              </h2>
              <div className="mt-6 space-y-4">
                <ProofImage src={htcapProof1} alt="Student result screenshot 1" />
                <ProofImage src={htcapProof2} alt="Student result screenshot 2" />
                <ProofImage src={htcapProof3} alt="Student result screenshot 3" />
                <ProofImage src={htcapProof4} alt="Student result screenshot 4" />
                <ProofImage src={htcapProof5} alt="Student result screenshot 5" />
              </div>
              <p className="mt-4 text-black/80">
                Real people. Real results. Real dollar income. From across Africa.
              </p>
              <CtaRow />
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>I Already Know What You&apos;re Thinking.</SectionHeading>
              <div className="mt-6 space-y-6 text-black/80">
                <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                  <p className="font-semibold text-black">&quot;I&apos;ve never sold anything in my life.&quot;</p>
                  <p className="mt-2">
                    Neither had I when I started. Sales is a learnable skill not a personality type. If you can
                    hold a real conversation, I can teach you to close.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                  <p className="font-semibold text-black">&quot;Is this another African internet scam?&quot;</p>
                  <p className="mt-2">
                    I live in Africa. I know exactly why you&apos;re skeptical. we&apos;ve all seen the fake
                    gurus, the empty promises, the courses that deliver nothing. That&apos;s why I&apos;m not
                    asking you to pay anything right now. Book a free call. Ask me anything. Verify
                    everything. Then decide.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                  <p className="font-semibold text-black">&quot;I don&apos;t have a laptop.&quot;</p>
                  <p className="mt-2">
                    You can start appointment setting with a smartphone. Many of my students did exactly that.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                  <p className="font-semibold text-black">&quot;I have a job. I don&apos;t have time.&quot;</p>
                  <p className="mt-2">
                    Most of my students started part-time while still employed. The goal is to build this until
                    it makes your job optional then make the move when you&apos;re ready.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--color-brand-accent)] pl-4">
                  <p className="font-semibold text-black">&quot;What if I try and it doesn&apos;t work for me?&quot;</p>
                  <p className="mt-2">
                    That&apos;s exactly what the call is for. We look at your specific situation together. If I
                    genuinely can&apos;t help you, I will tell you directly. I have no interest in wasting your
                    time or mine.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>Here&apos;s The Part Where I&apos;m Going To Be Brutally Honest With You</SectionHeading>
              <div className="mt-4 space-y-4 text-black/80">
                <p>
                  The Ghanaian cedi. The Kenyan shilling. The South African rand. The Ugandan shilling. The
                  Nigerian naira.
                </p>
                <p>Pick your currency it is losing ground against the dollar every single year.</p>
                <p>
                  Every month you spend not earning in dollars is a month you are falling behind not standing
                  still…literally Falling behind.
                </p>
                <p>
                  The cost of living is climbing. Salaries are not keeping up and the economy in every African
                  country is telling you the same thing it has always told you which is figure it out yourself.
                </p>
                <p className="font-semibold text-black">This skill is how you figure it out.</p>
                <p>
                  The market for remote closers and setters is growing globally right now. Africans who get in
                  before this space gets saturated will have a serious first mover advantage that latecomers
                  simply won&apos;t have.
                </p>
                <p>
                  I only mentor a small number of students at a time because I work with each person directly.
                  I am not running a course you buy and abandon. I am personally invested in your results.
                </p>
                <p>When my spots fill, I close the applications. No exceptions.</p>
              </div>
            </div>

            <div className="mt-12 border-t border-black/10 pt-10">
              <SectionHeading>One Free Call. Zero Risk. Potentially Life Changing.</SectionHeading>
              <div className="mt-4 space-y-4 text-black/80">
                <p>Here&apos;s what happens when you book:</p>
                <p>You get on a 30 minute call with me directly.</p>
                <p>
                  We&apos;ll look at exactly where you are right now, what&apos;s realistic for you in the next
                  30-60 days, and whether this mentorship is the right move for your specific situation.
                </p>
                <p>No scripts. No pressure. No nonsense.</p>
                <p>
                  I came back from $30,000 in debt and suicidal thoughts using this exact skill from Africa,
                  with no special advantage, no connections abroad, and no safety net.
                </p>
                <p className="font-semibold text-black">
                  If I could do that from that point what&apos;s your excuse going to be?
                </p>
              </div>
              <CtaRow />
              <p className="mt-6 text-black/80">
                Spots are strictly limited. If the button is still active, there&apos;s a spot for you.
                Don&apos;t let it close before you take it.
              </p>
              <p className="mt-4 border-l-2 border-[var(--color-brand-accent)] pl-4 italic text-black/80">
                &quot;I didn&apos;t have a mentor when I was in that dark place and I had to figure it out
                myself. You do now. Use it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Htcap
