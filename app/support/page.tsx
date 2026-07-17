import Link from "next/link";

const faqs = [
  {
    question: "What is this dashboard for?",
    answer:
      "Polymarket AI Agent helps organize market signals, trading activity, and portfolio insights in one dashboard.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. The dashboard is an informational tool only. Always review markets and risk before making any decision.",
  },
  {
    question: "How do I report an issue?",
    answer:
      "Send the page you were viewing, what you expected to happen, and a short description of the issue.",
  },
];

export default function SupportPage() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <div>
            <div className="brand-title">Polymarket AI</div>
            <div className="brand-subtitle">Agent Console</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link className="nav-link" href="/dashboard">
            Dashboard
          </Link>
          <a className="nav-link" href="#">
            Markets
          </a>
          <a className="nav-link" href="#">
            Signals
          </a>
          <a className="nav-link" href="#">
            Portfolio
          </a>
          <a className="nav-link" href="#">
            Settings
          </a>
          <Link className="nav-link active" href="/support">
            Support
          </Link>
        </nav>
      </aside>

      <main className="main-content support-page">
        <section className="hero panel">
          <div>
            <p className="eyebrow">Support Center</p>
            <h1>How can we help?</h1>
            <p className="muted">
              Get help with dashboard access, market signals, account questions,
              and issue reports.
            </p>
          </div>

          <div className="hero-actions">
            <a className="primary-btn" href="mailto:support@example.com">
              Email Support
            </a>
            <Link className="secondary-btn" href="/dashboard">
              Back to Dashboard
            </Link>
          </div>
        </section>

        <section className="support-grid">
          <div className="panel support-card">
            <h2>Contact Support</h2>
            <p className="muted">
              For fastest help, include your account email, the page URL, and a
              screenshot or short explanation of the issue.
            </p>
            <a className="text-link" href="mailto:support@example.com">
              support@example.com
            </a>
          </div>

          <div className="panel support-card">
            <h2>System Status</h2>
            <p className="muted">
              If data looks delayed, refresh the dashboard and check again in a few
              minutes. Market feeds and AI signals may update at different times.
            </p>
          </div>
        </section>

        <section className="panel faq-panel">
          <div className="panel-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p className="muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
