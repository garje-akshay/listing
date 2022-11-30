import language from "./data";

export const getTranslation = (text) => {
  const query = new URLSearchParams(window.location.search);
  const t = query.get("t");
  let currentLanguage = language[t] || language["en"];
  let translatedText = currentLanguage[text] || "";
  return translatedText;
};
