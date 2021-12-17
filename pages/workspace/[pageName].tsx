import { useRouter } from "next/router";

export function Page() {
	const router = useRouter();
	const { pageName } = router.query;

	return <h1>{pageName}</h1>;
}

export default Page;
