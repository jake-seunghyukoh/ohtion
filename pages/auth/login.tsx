import Link from 'next/link';
import { useRouter } from 'next/router';

export function Login() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>login</button>
      <Link href="/auth/join">
        <a>Join this service</a>
      </Link>
    </div>
  );
}

export default Login;
