import type { ProductFAQ } from "@/lib/types";

/** Erişilebilir, JS gerektirmeyen native details/summary akordeonu */
export function FAQAccordion({ faqs }: { faqs: ProductFAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-hairline bg-white px-5 py-4 shadow-soft"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-ink sm:text-base">
            {faq.question}
            <svg
              className="h-5 w-5 shrink-0 text-primary-soft transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
