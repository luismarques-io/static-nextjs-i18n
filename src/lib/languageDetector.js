// inspired by: https://github.com/i18next/next-language-detector
import i18nextConfig from "../../next-i18next.config";

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formatLanguageCode = (code) => {
	// http://www.iana.org/assignments/language-tags/language-tags.xhtml
	if (typeof code === "string" && code.indexOf("-") > -1) {
		const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
		const p = code.split("-");

		if (p.length === 2) {
			p[0] = p[0].toLowerCase();
			p[1] = p[1].toUpperCase();

			if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
		} else if (p.length === 3) {
			p[0] = p[0].toLowerCase();

			// if lenght 2 guess it's a country
			if (p[1].length === 2) p[1] = p[1].toUpperCase();
			if (p[0] !== "sgn" && p[2].length === 2) p[2] = p[2].toUpperCase();

			if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
			if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
		}

		return p.join("-");
	}

	return code;
};

const getLanguagePartFromCode = (code) => {
	if (!code || code.indexOf("-") < 0) return code;

	const p = code.split("-");
	return formatLanguageCode(p[0]);
};

const makeGetBestMatchFromCodes =
	({ supportedLanguages, fallbackLng }) =>
	(codes) => {
		if (!codes) return null;

		const isSupportedCode = (code) => !supportedLanguages || !supportedLanguages.length || supportedLanguages.indexOf(code) > -1;

		let found;

		// pick first supported code or if no restriction pick the first one (highest prio)
		codes.forEach((code) => {
			if (found) return;
			const cleanedLng = formatLanguageCode(code);
			if (!supportedLanguages || isSupportedCode(cleanedLng)) found = cleanedLng;
		});

		// if we got no match in supportedLanguages yet - check for similar locales
		// first  de-CH --> de
		// second de-CH --> de-DE
		if (!found && supportedLanguages) {
			codes.forEach((code) => {
				if (found) return;

				const lngOnly = getLanguagePartFromCode(code);
				if (isSupportedCode(lngOnly)) {
					found = lngOnly;
					return;
				}

				found = supportedLanguages.find((supportedLng) => {
					if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
					return undefined;
				});
			});
		}

		// if nothing found, use fallbackLng
		if (!found) found = fallbackLng;

		return found;
	};

const LanguageDetector = ({ supportedLanguages, fallbackLng } = {}) => {
	const getBestMatchFromCodes = makeGetBestMatchFromCodes({ supportedLanguages, fallbackLng });

	return {
		detect: () => {
			const detectedLanguages = [navigator?.language, navigator?.userLanguage];
			return getBestMatchFromCodes(detectedLanguages);
		}
	};
};

export default LanguageDetector({
	supportedLanguages: i18nextConfig.i18n.locales,
	fallbackLng: i18nextConfig.i18n.defaultLocale
});
