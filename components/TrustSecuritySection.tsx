"use client";

const facts = [
  {
    title: "Sealed, not editable",
    body: "An issued record is hashed. It is not a screenshot someone can quietly edit.",
  },
  {
    title: "Private until shared",
    body: "The trail stays private. A RedNote is only as visible as the student chose.",
  },
  {
    title: "Never sold",
    body: "School and student data is not sold to third parties.",
  },
  {
    title: "A person confirms it",
    body: "Teachers and the school mark what is true. Access leaves an audit trail.",
  },
];

export default function TrustSecuritySection() {
  return (
    <section className="relative bg-dark-bg px-6 py-24" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl">
        <h2
          id="trust-heading"
          className="max-w-3xl text-4xl font-bold leading-tight text-dark-text md:text-5xl"
        >
          Privacy-first, so the seal means something.
        </h2>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-dark-card-alt bg-dark-card-alt sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.title} className="bg-dark-card px-6 py-7">
              <dt className="text-lg font-semibold text-dark-text">{fact.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-dark-text-secondary">
                {fact.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
