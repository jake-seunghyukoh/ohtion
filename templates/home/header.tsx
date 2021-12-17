import Link from 'next/link';

export function HomeHeader() {
  return (
    <div>
      Home Header
      <Link href="/auth/join">
        <a>Join</a>
      </Link>
    </div>
  );
}

export default HomeHeader;
