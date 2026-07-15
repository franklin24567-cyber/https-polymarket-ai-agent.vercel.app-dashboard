import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="panel home-panel">
        <div className="brand brand-center">
          <div className="brand-mark">P</div>
          <div>
            <div className="brand-title">Polymarket AI</div>
            <div className="brand-subtitle">Agent Console</div>
          </div>
        </div>

        <h1>Local Dashboard Build</h1>
        <p className="muted">
          A clean upgraded local dashboard starter with sidebar, stats, activity,
          and performance panels.
        </p>

        <div className="hero-actions center">
          <Link className="primary-btn" href="/dashboard">
            Open Dashboard
          </Link>
          <a className="secondary-btn" href="#features">
            View Features
          </a>
        </div>

        <div className="feature-row" id="features">
          <div className="mini-card">
            <h3>Live Stats</h3>
            <p className="muted small">Track portfolio and market metrics.</p>
          </div>
          <div className="mini-card">
            <h3>Signals</h3>
            <p className="muted small">
              See recent trading signals and alerts.
            </p>
          </div>
          <div className="mini-card">
            <h3>Responsive</h3>
            <p className="muted small">
              Works on desktop and mobile screens.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
