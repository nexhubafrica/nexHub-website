import RecordPreview from "./visuals/RecordPreview";

const notes = [
  {
    k: "01",
    title: "The trail, not a report card",
    body: "RedNotes, activities, leadership, and attendance are the body of the snapshot.",
  },
  {
    k: "02",
    title: "Results sit beside it",
    body: "Grades can be in the same seal. They are one part of the story, not the whole file.",
  },
  {
    k: "03",
    title: "The school issues it",
            body: "Hashed and sealed. Later school life does not rewrite what was already issued. The reference on this sample is an example.",
  },
];

export default function RecordSection() {
  return (
    <section
      id="record"
      className="relative bg-[#f3f7f4] px-6 py-24 text-[#10241c]"
      aria-labelledby="record-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00674F]">
            The NexHub Record
          </p>
          <h2
            id="record-heading"
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            One sealed snapshot of a school life.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-[#3d5c4e]">
            This is a sample, not a student on the network. It shows the shape
            of what a school issues.
          </p>
          <ol className="mt-8 space-y-5">
            {notes.map((note) => (
              <li key={note.k} className="flex gap-4">
                <span className="mt-0.5 font-mono text-sm font-bold text-[#00674F]">
                  {note.k}
                </span>
                <div>
                  <h3 className="font-semibold">{note.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#3d5c4e]">
                    {note.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <RecordPreview tone="onLight" variant="full" />
      </div>
    </section>
  );
}
