import Link from 'next/link';

export function Join() {
  return (
    <div>
      <h1>Join</h1>
      <Link href="/auth/login">
        <a>Go to login</a>
      </Link>
    </div>
  );
}

export default Join;
