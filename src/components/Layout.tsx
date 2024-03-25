import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<main className="min-h-[80vh] pb-24">{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
