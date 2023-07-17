import * as yup from "yup";

export const QueryClientOptions = {
	defaultOptions: {
		queries: {
			staleTime: 5000,
			refetchOnWindowFocus: false,
		},
	},
};

export const validationSchema = yup.object({
	goal: yup.string().required("Required"),
	subGoal: yup.string().required("Required"),
	routine: yup.string().required("Required"),
});
