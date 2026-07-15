export const metadata = {
  title: "Polymarket AI Agent",
  description: "AI-powered trading dashboard for Polymarket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
