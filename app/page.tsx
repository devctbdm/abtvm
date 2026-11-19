const features = [
  {
    number: "01",
    title: "Made for the big screen",
    description: "A clean, comfortable viewing experience on your TV.",
  },
  {
    number: "02",
    title: "Easy to get started",
    description: "Install in a moment and get straight to watching.",
  },
  {
    number: "03",
    title: "Yours to enjoy",
    description: "A simple app that keeps the focus on what’s on.",
  },
];

function ArrowDownIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M8 2.5v10m0 0 4-4m-4 4-4-4M3 14h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f6] text-[#18211f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <a
          aria-label="AVTV home"
          className="flex items-center gap-2.5"
          href="#home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#b9f45b] text-sm font-black tracking-[-0.08em] text-[#162016]">
            AV
          </span>
          <span className="text-lg font-bold tracking-[-0.06em]">avtv</span>
        </a>
        <a
          className="rounded-full border border-[#dce1dc] px-4 py-2 text-sm font-semibold transition-colors hover:border-[#18211f] sm:px-5"
          href="/abtv.apk"
        >
          Get the app
        </a>
      </header>

      <div
        className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-8 lg:px-12"
        id="home"
      >
        <section className="relative isolate overflow-hidden rounded-4xl bg-[#17201d] px-6 py-14 text-white sm:px-10 sm:py-16 lg:min-h-132.5 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-36 -top-56 -z-10 h-136 w-136 rounded-full border border-white/8 sm:-right-20 sm:-top-64"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-40 -z-10 h-104 w-104 rounded-full border border-white/8"
          />
          <div className="relative z-10 max-w-xl lg:pt-8">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-3.5 py-2 text-xs font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9f45b]" />
              YOUR SCREEN, YOUR WAY
            </p>
            <h1 className="max-w-lg text-5xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
              A better way
              <br />
              to <span className="text-[#b9f45b]">watch.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Meet AVTV — a fresh, simple TV experience designed to make
              settling in and pressing play feel effortless.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#b9f45b] px-6 text-sm font-bold text-[#17201d] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f45b]"
                download
                href="/abtv.apk"
                id="download"
              >
                <ArrowDownIcon />
                Download AVTV
              </a>
              <span className="text-xs text-white/45">For Android TV</span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto mt-14 max-w-82.5 lg:absolute lg:-bottom-12 lg:right-[9%] lg:mt-0 lg:w-[37%]"
          >
            <div className="absolute -inset-8 rounded-full bg-[#b9f45b]/10 blur-3xl" />
            <div className="relative rounded-[1.6rem] border border-white/15 bg-[#202a26] p-3 shadow-[0_35px_90px_-25px_rgba(0,0,0,0.65)]">
              <div className="overflow-hidden rounded-[1.1rem] bg-[#101613]">
                <div className="flex items-center justify-between px-5 pb-3 pt-4">
                  <span className="text-sm font-bold tracking-[-0.06em]">
                    avtv
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b9f45b]" />
                </div>
                <div className="relative mx-3 flex h-36 items-end overflow-hidden rounded-xl bg-linear-to-br from-[#697b59] via-[#39483c] to-[#1d2925] p-4">
                  <div className="absolute -right-5 -top-10 h-40 w-40 rounded-full border-22 border-white/[0.07]" />
                  <div className="absolute right-8 top-7 h-16 w-16 rounded-full bg-[#b9f45b]/70 blur-2xl" />
                  <div className="relative">
                    <p className="text-[9px] font-semibold tracking-[0.2em] text-white/60">
                      FEATURED
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tighter">
                      Find your next
                      <br />
                      favorite.
                    </p>
                  </div>
                </div>
                <div className="px-3 pb-4 pt-4">
                  <div className="mb-2 flex items-center justify-between px-1">
                    <p className="text-[10px] font-semibold text-white/80">
                      Pick up where you left off
                    </p>
                    <span className="text-[8px] text-white/35">VIEW ALL</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-linear-to-br from-[#e7b886] to-[#815746]" />
                    <div className="h-16 rounded-lg bg-linear-to-br from-[#8db7a5] to-[#345a4d]" />
                    <div className="h-16 rounded-lg bg-linear-to-br from-[#b0a4d4] to-[#514a72]" />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5 pb-3">
                  <span className="h-1 w-4 rounded-full bg-[#b9f45b]" />
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                </div>
              </div>
            </div>
            <div className="absolute -left-7 top-16 hidden rounded-2xl border border-white/10 bg-[#26322c] px-4 py-3 shadow-xl sm:block">
              <p className="text-[9px] font-medium text-white/45">
                READY WHEN YOU ARE
              </p>
              <p className="mt-1 text-xs font-semibold text-[#b9f45b]">
                Press play. Unwind.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-label="AVTV highlights"
          className="grid gap-8 px-3 py-12 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-14 lg:gap-12"
        >
          {features.map((feature) => (
            <article key={feature.number}>
              <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-[#829080]">
                {feature.number}
              </p>
              <h2 className="text-base font-semibold tracking-[-0.03em]">
                {feature.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#747d77]">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#e5e9e4] px-3 py-6 text-xs text-[#8a938c] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="font-semibold tracking-[-0.03em] text-[#59635c]">
            avtv
          </span>
          <span>Made for a more enjoyable night in.</span>
        </footer>
      </div>
    </main>
  );
}
