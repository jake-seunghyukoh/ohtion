import Link from 'next/link';

type Workspace = {
  pageName: string;
};

export function Workspace() {
  const workspaces: Workspace[] = [{ pageName: 'seunghyuk' }];

  return (
    <div>
      <h1>Workspace</h1>
      <ul>
        {workspaces.map((workspace) => {
          return (
            <li key={workspace.pageName}>
              <Link href={{ pathname: '/workspace/[pageName]', query: { pageName: workspace.pageName } }}>
                <a>{`Go to ${workspace.pageName}`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Workspace;
