import Navbar from '@/components/layouts/Nadvar';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Toaster } from 'sonner';

export const metadata = {
    title: 'Next.js',
    description: 'Initial page of store fruits web',
};

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className={roboto.className}>
                    <Toaster />
                    <Navbar />
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}