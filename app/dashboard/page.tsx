import Link from "next/link";

export default function DashboardPage() {
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
          <Link className="nav-link active" href="/dashboard">
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
          <Link className="nav-link" href="/support">
            Support
          </Link>
        </nav>

        <div className="sidebar-footer panel-inner">
          <p className="muted small">Local build</p>
          <p className="small">v1.0.0</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="search-box">
            <input type="text" placeholder="Search markets, trades..." />
          </div>

          <div className="topbar-actions">
            <button className="icon-btn" aria-label="Notifications">
              &#128276;
            </button>
            <button className="profile-btn">
              <span className="avatar">A</span>
              <span>Account</span>
            </button>
          </div>
        </header>

        <section className="hero panel">
          <div>
            <p className="eyebrow">Trading Dashboard</p>
            <h1>Polymarket AI Agent</h1>
            <p className="muted">
              Track markets, monitor activity, and manage positions from one
              local dashboard.
            </p>
          </div>

          <div className="hero-actions">
            <button className="primary-btn">New Trade</button>
            <button className="secondary-btn">Connect Wallet</button>
          </div>
        </section>

        <section className="stats-grid">
          <div className="panel stat-card">
            <p className="muted small">Active Markets</p>
            <div className="stat-row">
              <h3>128</h3>
              <span className="stat-change">+12%</span>
            </div>
          </div>

          <div className="panel stat-card">
            <p className="muted small">24h Volume</p>
            <div className="stat-row">
              <h3>$42.8K</h3>
              <span className="stat-change">+8.2%</span>
            </div>
          </div>

          <div className="panel stat-card">
            <p className="muted small">Open Positions</p>
            <div className="stat-row">
              <h3>19</h3>
              <span className="stat-change">+3</span>
            </div>
          </div>

          <div className="panel stat-card">
            <p className="muted small">Win Rate</p>
            <div className="stat-row">
              <h3>64%</h3>
              <span className="stat-change">+5%</span>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Recent Trades</h2>
              <a href="#" className="text-link">
                View all
              </a>
            </div>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Market</th>
                    <th>Side</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BTC above $70k</td>
                    <td>
                      <span className="pill pill-yes">YES</span>
                    </td>
                    <td>$120</td>
                    <td>Open</td>
                  </tr>
                  <tr>
                    <td>US election odds</td>
                    <td>
                      <span className="pill pill-no">NO</span>
                    </td>
                    <td>$250</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>ETH &gt; $4k</td>
                    <td>
                      <span className="pill pill-yes">YES</span>
                    </td>
                    <td>$80</td>
                    <td>Open</td>
                  </tr>
                  <tr>
                    <td>Fed cuts rates</td>
                    <td>
                      <span className="pill pill-yes">YES</span>
                    </td>
                    <td>$310</td>
                    <td>Settled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Activity</h2>
              <a href="#" className="text-link">
                Refresh
              </a>
            </div>

            <ul className="activity-list">
              <li>New signal generated for BTC market</li>
              <li>Position adjusted on election odds</li>
              <li>Portfolio risk updated successfully</li>
              <li>Price alert triggered on ETH</li>
            </ul>

            <div className="chart-placeholder">
              <div className="chart-bar bar1"></div>
              <div className="chart-bar bar2"></div>
              <div className="chart-bar bar3"></div>
              <div className="chart-bar bar4"></div>
              <div className="chart-bar bar5"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
