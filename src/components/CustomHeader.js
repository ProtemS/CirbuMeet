import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

const CustomHeader = ({
	title = AppConfig.title,
	description = AppConfig.description,
	canonical,
}) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				<link
					rel="apple-touch-icon"
					href={`${router.basePath}/icons8-blankie-48.png`}
					key="apple"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${router.basePath}/icons8-blankie-48.png`}
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${router.basePath}/icons8-blankie-48.png`}
					key="icon16"
				/>
				<link rel="icon" href={`${router.basePath}/icons8-blankie-48.png`} key="favicon" />
			</Head>
			<NextSeo
				title={title}
				description={description}
				canonical={canonical}
				openGraph={{
					title,
					description,
					url: canonical,
					locale: AppConfig.locale,
					site_name: AppConfig.site_name,
				}}
			/>
		</>
	);
};

export default CustomHeader;
