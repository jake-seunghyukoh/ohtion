import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler } from "react";

export function Login() {
	const router = useRouter();

	const userId = "test";
	const password = "password";

	const handleLogin = (event: FormEvent) => {
		event.preventDefault();

		// TODO: Just for test
		let inputUserId = event.target.userId.value;
		let inputPassword = event.target.password.value;

		if (inputUserId === userId && inputPassword === password) {
			router.push("/");
		} else {
			alert("로그인 실패!\n아이디와 비밀번호를 다시 확인해주세요");
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<input type="text" name="userId" placeholder="user id" required />
				<input
					type="password"
					name="password"
					placeholder="password"
					required
				/>
				<button type="submit">login</button>
			</form>
			<Link href="/auth/join">
				<a>Join this service</a>
			</Link>
		</div>
	);
}

export default Login;
