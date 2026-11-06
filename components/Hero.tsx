import NexHubLogo from "./NexHubLogo";
import DeviceShot from "./visuals/DeviceShot";
import RecordPreview from "./visuals/RecordPreview";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-24"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-dark-bg" />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-105 w-105 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(86, 179, 138, 0.35) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div className="rise-in">
          <div className="mb-6 flex items-center gap-3">
            <NexHubLogo className="h-11 w-11 sm:h-12 sm:w-12" />
            <div>
              <p className="text-xl font-bold tracking-tight text-dark-text sm:text-2xl">
                NexHub
              </p>
              <p className="text-sm font-semibold italic text-dark-primary-bright">
                Where learning becomes trusted
              </p>
            </div>
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-dark-text sm:text-5xl">
            School life, saved as it happens.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-dark-text-secondary sm:text-lg">
            One app for students, teachers, and parents. A sealed Record when
            proof is needed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@nexhub.africa?subject=School%20access%20request"
              className="inline-flex items-center justify-center rounded-full bg-dark-primary px-7 py-3.5 text-base font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
            >
              Start with your school
            </a>
            <a
              href="#record"
              className="inline-flex items-center justify-center px-3 py-3.5 text-base font-medium text-dark-text-secondary hover:text-dark-primary-bright transition-colors"
            >
              See the Record flow
            </a>
          </div>
        </div>

        <div className="rise-in relative mx-auto w-full max-w-130 sm:h-140">
          <div className="absolute right-0 top-4 hidden w-2/5 sm:block" aria-hidden>
            <DeviceShot
              src="/screenshots/mobile-teacher-inbox.png"
              alt=""
              sizes="180px"
            />
          </div>
          <div className="absolute left-0 top-14 hidden w-2/5 sm:block" aria-hidden>
            <DeviceShot
              src="/screenshots/mobile-parent-dashboard.png"
              alt=""
              sizes="180px"
            />
          </div>
          <div className="relative z-10 mx-auto w-[68%] sm:absolute sm:left-1/2 sm:top-0 sm:w-[52%] sm:-translate-x-1/2">
            <DeviceShot
              src="/screenshots/mobile-student-home.png"
              alt="Student home in the NexHub app, with a teacher inbox and parent view beside it"
              priority
              sizes="280px"
            />
          </div>
          <div className="relative z-20 mx-auto -mt-24 w-full max-w-sm sm:absolute sm:bottom-0 sm:left-1/2 sm:mt-0 sm:w-[84%] sm:-translate-x-1/2">
            <RecordPreview variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
