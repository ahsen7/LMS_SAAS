import CompanionCards from '@/components/Cards/CompanionCards';
import SearchInput from '@/components/Pages/Companions/Library/SearchInput';
import SubjectFilter from '@/components/Pages/Companions/Library/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companions.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>
          Companions Library
        </h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className='companions-grid'>
        {companions.map((companion) => (
          <CompanionCards
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary