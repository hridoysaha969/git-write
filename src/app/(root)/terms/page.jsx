// Terms.jsx
import { FileText, Shield, CheckCircle, AlertCircle } from "lucide-react";

// app/terms/page.js
export const metadata = {
  title: "Terms of Service – GitWrite",
  description:
    "Read the Terms of Service for GitWrite. Learn about acceptable use, data privacy, liability, and your rights when using our README generator.",
  keywords: "terms of service, legal, acceptable use, disclaimer",
  alternates: {
    canonical: "https://gitwrite.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service – GitWrite",
    description:
      "Read the Terms of Service for GitWrite – acceptable use, data privacy, liability, and more.",
    url: "https://gitwrite.vercel.app/terms",
    type: "website",
    images: [{ url: "https://gitwrite.vercel.app/og-terms.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service – GitWrite",
    description: "Read the Terms of Service for GitWrite.",
  },
};

export default function Terms() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "GitWrite Terms of Service",
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
            url: "https://gitwrite.vercel.app/terms",
          }),
        }}
      />

      <div className="bg-white">
        {/* Hero section */}
        <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <FileText size={16} />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Last updated: April 22, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="prose prose-gray max-w-none">
              {/* Introduction */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 mb-0">
                  By using GitWrite ("we", "our", or "us"), you agree to these
                  Terms of Service. Please read them carefully. If you do not
                  agree, please do not use our service.
                </p>
              </div>

              <h2>1. Our Service</h2>
              <p>
                GitWrite provides a web‑based README generation tool that allows
                users to create, preview, and download Markdown files locally in
                their browser. All processing occurs client‑side – no data is
                uploaded to our servers unless explicitly stated otherwise.
              </p>

              <h2>2. Use of the Service</h2>
              <p>
                You may use GitWrite for personal, open source, or commercial
                projects. You agree not to:
              </p>
              <ul>
                <li>Use the service for any illegal purpose</li>
                <li>
                  Attempt to reverse engineer, modify, or disrupt the service
                </li>
                <li>Use automated scripts to overload our infrastructure</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2>3. Data & Privacy</h2>
              <p>
                GitWrite does <strong>not</strong> store, process, or share any
                of the content you generate. All README creation happens locally
                in your browser. We do not use cookies for tracking, and we
                collect no personal information unless you voluntarily contact
                us (e.g., via email). For more details, see our{" "}
                <a href="/privacy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                The README files you generate are entirely your own – you retain
                all rights to the content. GitWrite's code, design, and brand
                assets are owned by us and may not be copied without permission.
              </p>

              <h2>5. Disclaimer of Warranties</h2>
              <p>
                GitWrite is provided "as is" without warranties of any kind. We
                do not guarantee that the service will be uninterrupted,
                error‑free, or free from harmful components. You use the service
                at your own risk.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, GitWrite shall not be
                liable for any indirect, incidental, or consequential damages
                arising from your use of the service, even if advised of the
                possibility of such damages.
              </p>

              <h2>7. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The latest version
                will always be posted at this URL with the effective date. Your
                continued use of GitWrite after changes constitutes acceptance
                of the new Terms.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of [Your
                Country/State], without regard to conflict of law principles.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:legal@gitwrite.dev"
                  className="text-purple-600 hover:underline"
                >
                  legal@gitwrite.dev
                </a>
                .
              </p>

              <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-100 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 m-0">
                  This document is for informational purposes and does not
                  constitute legal advice. For your specific legal needs, please
                  consult an attorney.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <section className="py-8 bg-gray-50 border-t">
          <div className="container max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} GitWrite. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}
