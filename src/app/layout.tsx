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
      <body className="min-h-screen bg-[#f2f3f3] font-poppins">{children}</body> 
    </html>

  );
}
