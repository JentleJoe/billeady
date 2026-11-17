import { useEffect } from 'react'
import '../styles/htrs.css'
import { HTRS_META } from '../config/htrs'
import HtrsHeader from '../components/htrs/layout/HtrsHeader'
import HtrsFooter from '../components/htrs/layout/HtrsFooter'
import MobileStickyCta from '../components/htrs/layout/MobileStickyCta'
import HeroSection from '../components/htrs/sections/HeroSection'
import ProblemSection from '../components/htrs/sections/ProblemSection'
import TruthSection from '../components/htrs/sections/TruthSection'
import MethodSection from '../components/htrs/sections/MethodSection'
import AboutSection from '../components/htrs/sections/AboutSection'
import ProgramSection from '../components/htrs/sections/ProgramSection'
import ResultsSection from '../components/htrs/sections/ResultsSection'
import QualificationSection from '../components/htrs/sections/QualificationSection'
import AdmissionSection from '../components/htrs/sections/AdmissionSection'
import FaqSection from '../components/htrs/sections/FaqSection'
import FinalCtaSection from '../components/htrs/sections/FinalCtaSection'

/**
 * /HTRS — Remote High Ticket Sales Coaching landing page.
 * Section order follows the "COPY FOR INT. STUDENTS" document.
 */
const Htrs = () => {
  // Page title & description while on /HTRS; restore the site defaults on leave.
  useEffect(() => {
    const prevTitle = document.title
    const descTag = document.querySelector('meta[name="description"]')
    const prevDesc = descTag?.getAttribute('content')
    document.title = HTRS_META.title
    descTag?.setAttribute('content', HTRS_META.description)
    return () => {
      document.title = prevTitle
      if (descTag && prevDesc) descTag.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="htrs-page">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-brand-primary focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Skip to content
      </a>
      <HtrsHeader />

      <main id="main" className="w-full bg-brand-black text-white overflow-x-clip">
        <HeroSection />
        <ProblemSection />
        <TruthSection />
        <MethodSection />
        <AboutSection />
        <ProgramSection />
        <ResultsSection />
        <QualificationSection />
        <AdmissionSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <HtrsFooter />
      <MobileStickyCta />
    </div>
  )
}

export default Htrs
