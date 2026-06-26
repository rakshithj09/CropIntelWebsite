import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const updated = "June 26, 2026";

export const metadata = {
  title: "Privacy Policy | CropIntel",
  description:
    "Plain-language privacy policy for CropIntel users in the United States.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Nav />
      <section className="px-4 pb-20 pt-36 sm:pt-40">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">Privacy Policy</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1] text-ink">
            CropIntel Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-ink-soft">Last updated: {updated}</p>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            This policy explains how CropIntel handles information for users in
            the United States. CropIntel helps growers identify likely crop leaf
            disease symptoms from photos and related crop details.
          </p>

          <div className="mt-12 space-y-10 text-ink-soft">
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Information We Collect
              </h2>
              <p className="mt-4 leading-relaxed">
                Depending on which CropIntel product features you use, we may
                collect account details such as your name, email address,
                authentication identifiers, and password reset activity. We may
                collect farm or field details you provide, including crop type,
                notes, approximate location, field names, and other agronomic
                context.
              </p>
              <p className="mt-4 leading-relaxed">
                If you use diagnosis features, we may collect uploaded crop or
                leaf photos, diagnosis results, confidence scores, timestamps,
                severity estimates, user feedback, and diagnosis history. We may
                collect device, browser, IP address, log, analytics, error, and
                API usage information needed to operate, protect, troubleshoot,
                and improve the service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Why We Use Information
              </h2>
              <p className="mt-4 leading-relaxed">
                We use information to provide accounts, operate the scanner,
                save farms and diagnosis history when those features are
                enabled, estimate likely crop conditions, provide support,
                improve reliability and model quality, detect abuse, secure the
                service, measure basic product usage, and comply with valid
                legal requests.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Storage And Third Parties
              </h2>
              <p className="mt-4 leading-relaxed">
                CropIntel may store product data with cloud infrastructure
                providers, authentication providers, database providers, file
                storage providers, analytics or error monitoring providers,
                email delivery providers, and AI or model infrastructure
                providers used to run the service. These providers receive only
                the information needed for their services.
              </p>
              <p className="mt-4 leading-relaxed">
                This public website loads fonts from Fontshare. If you open the
                scanner or another CropIntel app from this site, your browser
                will connect to that separate CropIntel product.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Photos, Location, And Farm Details
              </h2>
              <p className="mt-4 leading-relaxed">
                Crop photos, farm details, and location information can be
                sensitive. Only provide information you are comfortable using
                with CropIntel. We use this data to generate diagnoses, provide
                history and farm features, troubleshoot issues, and improve the
                service where permitted.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Retention
              </h2>
              <p className="mt-4 leading-relaxed">
                We keep account, farm, diagnosis, photo, analytics, log, and API
                usage information for as long as needed to provide the service,
                protect it from abuse, resolve disputes, improve reliability, or
                meet legal and business record needs. We delete or de-identify
                information when it is no longer needed for those purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Your Choices
              </h2>
              <p className="mt-4 leading-relaxed">
                You can choose not to provide optional farm details, location
                details, or crop photos. Some features may not work without that
                information. You can ask us to access, correct, or delete your
                account information by contacting us.
              </p>
              <p className="mt-4 leading-relaxed">
                To request account deletion, email us from the email address on
                your CropIntel account. We may need to verify your request before
                deleting account records, farm records, diagnosis history, and
                stored photos tied to your account. Some security logs, backup
                records, billing records, or records required for legal reasons
                may be retained for a limited period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Security
              </h2>
              <p className="mt-4 leading-relaxed">
                We use technical and organizational safeguards designed to
                protect user information. No internet service can guarantee
                perfect security, so please use a strong password and contact us
                if you believe your account or data may be at risk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Children
              </h2>
              <p className="mt-4 leading-relaxed">
                CropIntel is intended for growers, agricultural professionals,
                and other users who can manage farm and crop information. It is
                not intended for children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-ink">
                Contact
              </h2>
              <p className="mt-4 leading-relaxed">
                For privacy questions, account deletion requests, or data
                requests, contact CropIntel at{" "}
                <a
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                  href="mailto:support@cropintel.app"
                >
                  support@cropintel.app
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
