import Providers from "./providers";
import i18nextConfig from "../../../next-i18next.config";

export async function generateStaticParams() {
	return i18nextConfig.i18n.locales.map((locale) => ({
		locale
	}));
}

async function getMessages(locale: string) {
	const messageModule = await import(`@/i18n/messages/${locale}.json`);
	return messageModule.default;
}

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
	const messages = await getMessages(params.locale);
	return (
		<html lang={params.locale}>
			<body>
				<Providers messages={messages} locale={params.locale}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
