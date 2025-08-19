import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-providers';
import './globals.scss';

export const metadata: Metadata = {
  title: 'TEMPLATE PAGE',
  description: 'TEMPLATE PAGE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
