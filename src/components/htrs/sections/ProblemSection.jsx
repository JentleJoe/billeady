import { FadeIn } from '../../AnimationWrappers'
import { problem } from '../../../content/htrs'
import { Container, IndexMark } from '../ui/Layout'
import { QuoteMark } from '../ui/Icons'

/** What is really happening in remote sales: the promise, the three realities, the doubt. */
const ProblemSection = () => (
  <section id="reality" className="scroll-mt-20 bg-brand-black py-16 md:py-24" aria-labelledby="htrs-problem-title">
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 id="htrs-problem-title" className="text-3xl md:text-4xl font-semibold text-white leading-tight text-balance">
            {problem.intro}
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-gray-300 leading-relaxed">{problem.promiseLead}</p>
          <blockquote className="mt-5 relative bg-brand-muted border border-white/10 rounded-sm px-6 py-6 md:px-8">
            <QuoteMark className="w-7 h-7 text-brand-primary mb-3" />
            <p className="text-lg md:text-xl text-white leading-relaxed">{problem.promise}</p>
          </blockquote>
          <p className="mt-6 text-gray-300 leading-relaxed">{problem.followed}</p>
        </FadeIn>
      </div>

      <FadeIn className="mt-16 md:mt-20">
        <p className="text-xl md:text-2xl font-semibold text-white">{problem.question}</p>
      </FadeIn>

      <ol className="mt-8 grid gap-5 md:grid-cols-3">
        {problem.realities.map((item, index) => (
          <li key={item.title}>
            <FadeIn delay={index * 100} className="h-full">
              <div className="h-full bg-brand-muted border border-white/10 rounded-sm p-6 md:p-7 hover:border-brand-primary/40 transition-colors duration-300">
                <IndexMark n={index + 1} className="mb-5" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title.replace(/:$/, '')}</h3>
                <p className="text-sm md:text-[15px] text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>

      <FadeIn className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
        <p className="text-gray-400">{problem.wonderingLead}</p>
        <p className="mt-5 text-2xl md:text-3xl font-semibold text-white leading-snug">{problem.wondering}</p>
      </FadeIn>
    </Container>
  </section>
)

export default ProblemSection
