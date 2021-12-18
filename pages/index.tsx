import WorkspaceLayout from "@templates/home/layout";
import { AppContext } from "next/app";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

type Workspace = {
	pageName: string;
};

type HomeProps = {
	workspaces: Workspace[];
};

export function Home(props: HomeProps) {
	const { workspaces } = props;
	return (
		<div>
			<h1>Ohtion</h1>
			<ul>
				{workspaces.map((workspace) => {
					return (
						<li key={workspace.pageName}>
							<Link
								href={{
									pathname: "/workspace/[pageName]",
									query: { pageName: workspace.pageName },
								}}
							>
								<a>{`Go to workspace: ${workspace.pageName}`}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export async function getStaticProps(context: AppContext) {
	const workspaces: Workspace[] = [
		{ pageName: "seunghyuk" },
		{ pageName: "weebut" },
	];

	const props: HomeProps = {
		workspaces: workspaces,
	};

	return {
		props: props,
	};
}

Home.getLayout = (page: ReactElement): ReactNode => {
	return <WorkspaceLayout>{page}</WorkspaceLayout>;
};

export default Home;
