export const metadata = {
  title: 'Polymarket AI Agent',
  description: 'Polymarket AI Agent dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
