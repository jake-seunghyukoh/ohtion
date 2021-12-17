import Link from "next/link";
import { useRouter } from "next/router";

export function Join() {
	const router = useRouter();
	const handleJoin = () => {
		router.push("/auth/login");
	};
	return (
		<div>
			<h1>Join</h1>
			<form onSubmit={handleJoin}>
				<input type="text" placeholder="user id" alt="userId" required />
				<input
					type="password"
					placeholder="password"
					alt="userPassword"
					required
				/>
				<button type="submit">join</button>
			</form>
			<Link href="/auth/login">
				<a>Go to login</a>
			</Link>
		</div>
	);
}

export default Join;
