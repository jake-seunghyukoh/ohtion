import Link from "next/link";

export function HomeHeader() {
	return (
		<header>
			Home Header
			<Link href="/auth/join">
				<a>Join</a>
			</Link>
		</header>
	);
}

export default HomeHeader;
