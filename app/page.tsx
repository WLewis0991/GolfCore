import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center text-center">
        <span
          className="animate-in mb-8 text-[0.65rem] font-semibold tracking-[0.3em] text-text-tertiary uppercase opacity-0 sm:text-xs"
          style={{ animationDelay: "0.1s" }}
        >
          Handicap Tracker
        </span>

        <h1
          className="animate-in font-display text-6xl font-bold leading-[0.9] tracking-tight text-foreground opacity-0 sm:text-8xl md:text-9xl"
          style={{ animationDelay: "0.2s" }}
        >
          Golf
          <br />
          <span className="text-gold">Core</span>
        </h1>

        <div
          className="animate-in mx-auto mt-8 h-px w-12 bg-gold opacity-0 sm:w-16"
          style={{ animationDelay: "0.4s" }}
        />

        <p
          className="animate-in mt-6 max-w-sm text-sm text-text-secondary opacity-0 sm:text-base md:max-w-md md:text-lg"
          style={{ animationDelay: "0.5s" }}
        >
          Your handicap, calculated with precision.
          <br className="hidden sm:block" />{" "}
          Every round, logged with care.
        </p>

        <Link
          href="/dashboard"
          className="animate-in mt-10 rounded-sm bg-green px-8 py-3 text-sm font-semibold text-background opacity-0 transition-colors duration-200 hover:bg-green-soft sm:text-base"
          style={{ animationDelay: "0.6s" }}
        >
          Enter
        </Link>
      </div>
    </div>
  );
}
