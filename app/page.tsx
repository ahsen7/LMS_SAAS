import CTA from '@/components/Buttons/CTA'
import CompanionCards from '@/components/Cards/CompanionCards'
import CompanionList from '@/components/Pages/Home/CompanionList'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className='home-section'>
        <CompanionCards
          id="123"
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          duration={45}
          color="#ffda6e"
          subject="Science"
        />
        <CompanionCards
          id="456"
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          duration={30}
          color="#e5d0ff"
          subject="Mathematics"
        />
        <CompanionCards
          id="789"
          name='Verba the Vocabulary Builder'
          topic='Language Basics'
          duration={45}
          color="#bde7ff"
          subject="English Literature"
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />

      </section>
    </main>
  )
}

export default Page