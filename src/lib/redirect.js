import { usePathname, useSearchParams, redirect } from "next/navigation";
import languageDetector from "./languageDetector";

export const useRedirect = (to) => {
	const pathname = usePathname();
	const searchParams = new URLSearchParams(useSearchParams()).toString();
	const target = to || pathname;

	// language detection
	const detectedLng = languageDetector.detect();

	// prevent endless loop
	if (target.startsWith(`/${detectedLng}`) && pathname === "/404") {
		redirect(`/${detectedLng}${pathname}${searchParams ? "?" + searchParams : ""}`);
	}

	redirect(`/${detectedLng}${target}${searchParams ? "?" + searchParams : ""}`);
};

export const Redirect = () => {
	useRedirect();
	return null;
};
