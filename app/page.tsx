import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import {
  Camera,
  Timer,
  Share2,
  Lock,
  Download,
  Github,
  Clock,
  Infinity,
  Eye,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 bg-[#09001E]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Shader background */}
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-[1] bg-[#09001E]/60" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Now available on Android
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Framed
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-4 font-light">
            Share photos that disappear.
          </p>
          <p className="text-base sm:text-lg text-white/50 mb-12 max-w-xl mx-auto">
            Create a photo album with a built-in timer. Share it once — then it&apos;s gone.
            No cloud, no accounts, no tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-amber-300 hover:scale-105 shadow-lg shadow-amber-400/20"
            >
              <Download className="h-5 w-5" />
              Download APK
            </a>
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white/40 cursor-not-allowed"
            >
              Play Store
              <span className="ml-1 text-xs font-normal text-white/30 bg-white/10 rounded-full px-2 py-0.5">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll to explore</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Three steps. Zero fuss. Total privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                step: "01",
                title: "Pick your photos",
                description:
                  "Select any photos from your gallery to include in the session.",
              },
              {
                icon: Timer,
                step: "02",
                title: "Set a timer",
                description:
                  "Choose how long the recipient can view: once, an hour, a day, a week, or forever.",
              },
              {
                icon: Share2,
                step: "03",
                title: "Share & it expires",
                description:
                  "Send the session link. Once the timer runs out, the photos are gone.",
              },
            ].map(({ icon: Icon, step, title, description }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/30 hover:bg-white/8 transition-all"
              >
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none">
                  {step}
                </div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              You control the clock
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Pick exactly how long your photos stick around.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Eye,
                label: "View Once",
                sub: "One look, then gone",
                highlight: true,
              },
              { icon: Clock, label: "1 Hour", sub: "Short window" },
              { icon: Clock, label: "1 Day", sub: "24 hours" },
              { icon: Clock, label: "1 Week", sub: "Seven days" },
              { icon: Infinity, label: "Keep Forever", sub: "No expiry" },
            ].map(({ icon: Icon, label, sub, highlight }) => (
              <div
                key={label}
                className={`rounded-2xl border p-6 text-center transition-all hover:scale-105 ${
                  highlight
                    ? "border-amber-400/40 bg-amber-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <Icon
                    className={`h-5 w-5 ${highlight ? "text-amber-400" : "text-white/60"}`}
                  />
                </div>
                <p
                  className={`font-semibold text-sm ${highlight ? "text-amber-300" : "text-white"}`}
                >
                  {label}
                </p>
                <p className="text-white/40 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-10 sm:p-16 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/20">
              <Lock className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Privacy by design.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Zero data collected", desc: "We don't know you exist." },
                {
                  title: "Fully offline",
                  desc: "No network requests. Ever.",
                },
                {
                  title: "No accounts",
                  desc: "No sign-up, no email, nothing.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-amber-300 mb-1">{title}</p>
                  <p className="text-white/50 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm">
              Photos never leave your device. No cloud storage. No analytics. No third-party SDKs
              that phone home.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Framed
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-lg mx-auto">
            Download the APK directly and install it on any Android device.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/srihari7070/Framed/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-10 py-4 text-base font-semibold text-black transition-all hover:bg-amber-300 hover:scale-105 shadow-xl shadow-amber-400/20"
            >
              <Download className="h-5 w-5" />
              Download APK
            </a>

            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-10 py-4 text-base font-semibold text-white/35 cursor-not-allowed">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.19-3.19L3.18 23.76z" />
                <path d="M22.38 10.34l-2.94-1.67-3.29 3.29 3.29 3.28 2.96-1.69a1.83 1.83 0 0 0 0-3.21z" />
                <path d="M2.08.34A1.72 1.72 0 0 0 1.5 1.62v20.76c0 .5.21.95.58 1.28l.08.07L14.08 12v-.29L2.16.27l-.08.07z" />
                <path d="M13.58 7.4L2.08.34l-.08-.07 12.6 12.6-1.02-5.47z" />
              </svg>
              Play Store
              <span className="text-xs text-white/25 bg-white/8 rounded-full px-2 py-0.5">
                Coming Soon
              </span>
            </div>
          </div>

          <p className="text-white/30 text-sm mt-8">
            Android 8.0 (Oreo) or higher required. Built with React Native / Expo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Framed · Built by Srihari Ananthan</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://github.com/srihari7070/Framed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white/70 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
