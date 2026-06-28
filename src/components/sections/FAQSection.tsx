'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  items: FAQItem[]
}

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border-default last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 md:py-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-[15px] md:text-base font-medium text-text-heading leading-snug">
          {question}
        </span>
        <svg
          className={`flex-shrink-0 w-5 h-5 text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-5 md:pb-6' : 'max-h-0'}`}
      >
        <p className="text-sm md:text-[15px] text-text-muted leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection({ title, items }: FAQSectionProps) {
  return (
    <Section>
      <Container size="md">
        <SectionHeader title={title} />
        <div className="rounded-xl border border-border-default bg-white px-6 md:px-8">
          {items.map((item) => (
            <FAQAccordionItem key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
