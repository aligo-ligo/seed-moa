import { QueryClientConfig } from "@tanstack/react-query";
import * as yup from "yup";

export const queryClientOption: QueryClientConfig = {
	defaultOptions: {
	  queries: {
		retry: 1,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		networkMode: 'always',
		staleTime: 60 * 1000,
		throwOnError: true,
	  },
	  mutations: {
		networkMode: 'always',
	  },
	},
  };

export const validationSchema = yup.object({
	goal: yup.string().required("Required"),
	subGoal: yup.string().required("Required"),
	routine: yup.string().required("Required"),
});
