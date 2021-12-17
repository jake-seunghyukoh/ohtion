import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Header />
			<main>Home Layout{children}</main>
			<Footer />
		</div>
	);
}

export default HomeLayout;
