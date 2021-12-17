import DefaultFooter from "@templates/default.footer";
import DefaultHeader from "@templates/default.header";
import DefaultLayout from "@templates/default.layout";
import "@styles/globals.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout =
		Component.getLayout ??
		((page) => {
			return (
				<div>
					<DefaultHeader />
					<DefaultLayout>{page}</DefaultLayout>
					<DefaultFooter />
				</div>
			);
		});

	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
