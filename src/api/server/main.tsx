import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Requests from "./request-routes";
import * as Constants from "src/constants";
// API config
const formOptions = [
  "updateKYC",
  "updateProfile",
  "fileUpload",
  "pinFileToIPFS",
];
export const Main = ({ children }: Child) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
export const Client = Axios.default.create();
const client = Axios.default.create({
  baseURL: `${Constants.API_CONFIG.baseURL}`,
});
// export const Request = (
//   options: string | Axios.AxiosRequestConfig,
//   data?: object,
//   headers?: Record<string, string>
// ) => {
//   const startAt = performance.now();
//   //  Develope Request and Header options
//   const requestOptions: Axios.AxiosRequestConfig =
//     typeof options === "string" ? Requests.Routes[options] : options;

//   console.log("requestOptions", requestOptions);
//   const option = `${requestOptions.url}`.split("/").slice(-1)[0];
//   if (import.meta.env.MODE === "development")
//     console.info(`${option} Request`, data);
//   return client({
//     ...requestOptions,
//     headers: {
//       "Content-Type":
//         formOptions.indexOf(requestOptions.url!.split("/").slice(-1)[0]) > -1
//           ? "multipart/form-data"
//           : "application/json",
//       ...(["pinJSONToIPFS", "pinFileToIPFS"].includes(
//         requestOptions.url!.split("/").slice(-1)[0]
//       )
//         ? {}
//         : { Authorization: localStorage.getItem("accessToken") || "" }),
//       ...headers,
//     },
//     data,
//   })
//     .then((res) => {
//       import.meta.env.MODE === "development" &&
//         console.info(
//           `${options} Response Timing ${performance.now() - startAt}ms`,
//           res.data
//         );
//       if (requestOptions.url?.includes("login")) {
//         localStorage.setItem("accessToken", res.data.accessToken);
//       }
//       return res.data;
//     })
//     .catch((e) => {
//       return e.response?.data;
//     });
// };

export const Request = (
  options: string | Axios.AxiosRequestConfig,
  data?: object,
  headers?: Record<string, string>
) => {
  const startAt = performance.now();

  // Log options and request routes for debugging
  console.log("Options:", options);
  if (typeof options === "string") {
    console.log("Request Route:", Requests.Routes[options]);
  }

  // Ensure requestOptions is properly defined
  const requestOptions: Axios.AxiosRequestConfig =
    typeof options === "string" ? Requests.Routes[options] : options;

  if (!requestOptions || !requestOptions.url) {
    console.error(
      " Error: requestOptions is undefined or missing URL.",
      requestOptions
    );
    throw new Error("Invalid request options: Ensure the route exists.");
  }

  console.log("requestOptions:", requestOptions);

  const option = `${requestOptions.url}`.split("/").slice(-1)[0];
  if (import.meta.env.MODE === "development")
    console.info(`${option} Request`, data);

  return client({
    ...requestOptions,
    headers: {
      "Content-Type": formOptions.includes(option)
        ? "multipart/form-data"
        : "application/json",
      ...(["pinJSONToIPFS", "pinFileToIPFS"].includes(option)
        ? {}
        : {
            Authorization: localStorage.getItem("accessToken") || "",
          }),
      ...headers,
    },
    data,
  })
    .then((res) => {
      if (import.meta.env.MODE === "development") {
        console.info(
          `${options} Response Timing ${performance.now() - startAt}ms`,
          res.data
        );
      }
      if (requestOptions.url.includes("login")) {
        localStorage.setItem("accessToken", res.data.accessToken);
      }
      return res.data;
    })
    .catch((e) => {
      console.error(" Request Failed:", e);
      return e.response?.data;
    });
};

export const useRequest = (
  queryOptions: string[],
  options: string | Axios.AxiosRequestConfig,
  data?: object
) => {
  return ReactQuery.useQuery(queryOptions, () => Request(options, data));
};
