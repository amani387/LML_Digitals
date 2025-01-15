import './globals.css';

export const metadata = {
  title: 'Repair Services',
  description: 'Professional repair services for your needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>

  );
}
