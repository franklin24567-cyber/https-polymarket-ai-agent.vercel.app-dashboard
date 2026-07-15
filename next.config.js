/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/dashboard", permanent: false },

      { source: "/login", destination: "/dashboard/login", permanent: false },
      { source: "/overview", destination: "/dashboard/overview", permanent: false },

      { source: "/wallets", destination: "/dashboard/wallets", permanent: false },
      { source: "/wallets/:path*", destination: "/dashboard/wallets/:path*", permanent: false },

      { source: "/signals", destination: "/dashboard/signals", permanent: false },
      { source: "/paper-trades", destination: "/dashboard/paper-trades", permanent: false },
      { source: "/rules", destination: "/dashboard/rules", permanent: false },
      { source: "/reports", destination: "/dashboard/reports", permanent: false },
      { source: "/withdraw", destination: "/dashboard/withdraw", permanent: false },
      { source: "/ledger", destination: "/dashboard/ledger", permanent: false },

      { source: "/admin", destination: "/dashboard/admin", permanent: false },
      { source: "/admin/:path*", destination: "/dashboard/admin/:path*", permanent: false },

      { source: "/api/:path*", destination: "/dashboard/api/:path*", permanent: false }
    ];
  },

  async rewrites() {
    return [
      { source: "/dashboard", destination: "/" },
      { source: "/dashboard/:path*", destination: "/:path*" }
    ];
  }
};

module.exports = nextConfig;
