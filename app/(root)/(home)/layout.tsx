import { ReactNode } from 'react';

// Import custom components for layout
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

// Metadata for the RootLayout, used by Next.js for SEO or page-specific settings
export const metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

/**
 * RootLayout is a functional React component that assembles the page structure with
 * a Navbar, Sidebar, and a main content area where `children` are rendered.
 * This layout is used across the entire application to maintain a consistent look and feel.
 *
 * @param {ReactNode} children - Represents the child components that will be rendered within the layout.
 * @returns {JSX.Element} The complete page layout with navbar, sidebar, and main content area.
 */
const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
