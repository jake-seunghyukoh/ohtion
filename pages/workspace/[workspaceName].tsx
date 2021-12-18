import { useRouter } from "next/router";

export function Page() {
	const router = useRouter();
	const { workspaceName } = router.query;

	return <h1>{workspaceName}</h1>;
}

export default Page;
