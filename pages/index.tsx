import WorkspaceLayout from '@templates/home/layout';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

type Workspace = {
  pageName: string;
};

export function Home() {
  const workspaces: Workspace[] = [{ pageName: 'seunghyuk' }];

  return (
    <div>
      <h1>Ohtion</h1>
      <ul>
        {workspaces.map((workspace) => {
          return (
            <li key={workspace.pageName}>
              <Link href={{ pathname: '/workspace/[pageName]', query: { pageName: workspace.pageName } }}>
                <a>{`Go to workspace: ${workspace.pageName}`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Home.getLayout = (page: ReactElement): ReactNode => {
  return <WorkspaceLayout>{page}</WorkspaceLayout>;
};

export default Home;
