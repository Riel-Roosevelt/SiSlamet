import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SiSlamet | HSE Operations', description: 'Sistem Informasi Safety, Lingkungan, dan Monitoring Aktivitas' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
