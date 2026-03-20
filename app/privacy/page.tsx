import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Framed",
  description: "Framed collects no data. Zero. Read our privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09001E] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 mb-6">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">
            App: Framed &nbsp;·&nbsp; Developer: Srihari Ananthan &nbsp;·&nbsp; Last updated: March
            2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
            <p>
              Framed is an Android app that lets you create photo viewing sessions with built-in
              expiration timers. This privacy policy explains what data (if any) is collected when
              you use Framed.
            </p>
            <p className="mt-3 font-medium text-amber-300">
              Short version: we collect absolutely nothing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <p>
              Framed does not collect, transmit, store, or share any personal information or usage
              data of any kind. This includes but is not limited to:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Names, email addresses, or contact information",
                "Photos or media you view or share within the app",
                "Device identifiers or hardware information",
                "Location data",
                "Usage statistics or analytics",
                "Crash reports",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              No Network Requests
            </h2>
            <p>
              Framed operates entirely offline. The app makes <strong className="text-white">no
              network requests</strong> of any kind. Your photos never leave your device. There is
              no server, no backend, no API endpoint that Framed communicates with.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Photos Stay on Your Device
            </h2>
            <p>
              All photos you select for a Framed session remain stored locally on your device only.
              Framed does not upload photos to any cloud service, server, or third-party storage.
              When a session expires, the session data is cleared from the app — photos in your
              gallery are untouched.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              No Accounts Required
            </h2>
            <p>
              Framed requires no account registration, no sign-in, no email address, and no phone
              number. You can use the app completely anonymously.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Third-Party SDKs
            </h2>
            <p>
              Framed does not include any third-party analytics SDKs, advertising SDKs, or any
              other libraries that transmit data to external services. There is no Firebase, no
              Google Analytics, no Facebook SDK, no Sentry — nothing that phones home.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Permissions
            </h2>
            <p>
              Framed may request permission to access your photo library or camera roll in order to
              let you select photos for a session. This permission is used solely within the app and
              the selected photos are never transmitted anywhere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Since Framed collects no data from anyone, it inherently does not collect data from
              children under 13 (or the applicable age in your jurisdiction).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              If this privacy policy changes in any meaningful way, the updated policy will be
              posted here with a revised &ldquo;last updated&rdquo; date. Given the nature of the
              app, we don&apos;t anticipate changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have any questions or concerns about this privacy policy, you can reach out
              via GitHub Issues:
            </p>
            <a
              href="https://github.com/srihari7070/Framed-website/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
            >
              github.com/srihari7070/Framed-website/issues
            </a>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Framed · Srihari Ananthan</p>
          <Link
            href="/"
            className="inline-block mt-2 hover:text-white/60 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
