import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useYupValidationResolver = (
	validationSchema: yup.AnyObjectSchema
): ((data: any) => Promise<any>) =>
	useCallback(
		async (data) => {
			console.log("hook input", data);
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				});

				return {
					values,
					errors: {},
				};
			} catch (errors) {
				console.log("inhook", errors);
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors, currentError) => ({
							...allErrors,

							[currentError.path]: {
								type: currentError.type ?? "validation",
							},
							message: currentError.message,
						}),
						{}
					),
				};
			}
		},
		[validationSchema]
	);

export default useYupValidationResolver;
