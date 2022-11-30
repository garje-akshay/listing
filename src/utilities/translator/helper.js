const addApiKey = (params) => {
  return {
    ...params,
    apiKey: localStorage.getItem("apiKey"),
  };
};

export const getURLSearchParams = (params) => {
  return new URLSearchParams(addApiKey(params)).toString();
};
