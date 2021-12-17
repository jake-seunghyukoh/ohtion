import { ReactNode } from "react";

export function HomeLayout({ children }: { children: ReactNode }) {
	return <main>{children}</main>;
}

export default HomeLayout;
