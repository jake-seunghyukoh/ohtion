import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to Ohtion</h1>
      <Link href="/workspace">
        <a>Go to Workspace</a>
      </Link>
    </div>
  );
};

export default Home;
