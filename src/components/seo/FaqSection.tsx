export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="mt-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-black text-stone-950">
        FAQ
      </h2>
      <div className="mt-4 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white/85 shadow-lg shadow-stone-950/[0.03]">
        {items.map((item) => (
          <div className="p-5" key={item.question}>
            <h3 className="font-bold text-stone-950">{item.question}</h3>
            <p className="mt-2 leading-7 text-stone-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
