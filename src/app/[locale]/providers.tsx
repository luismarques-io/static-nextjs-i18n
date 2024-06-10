"use client";

import { NextIntlClientProvider } from "next-intl";

interface ProvidersProps {
	children: React.ReactNode;
	locale: string;
	messages: Record<string, string>;
}

function Providers({ children, locale, messages }: ProvidersProps) {
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}

export default Providers;
