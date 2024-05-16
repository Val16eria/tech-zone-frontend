import * as yup from "yup";

const personalDataSchema = yup.object({
	first_name: yup.string().trim(),
	last_name: yup.string().trim(),
	phone_number: yup.string().trim().test({
		test: function(value) {
			if (!value) return true;
			return /^\+?\d{11}$/.test(value);
		},
		message: "Неверный формат номера телефона"
	})
});

export { personalDataSchema };
export type PersonalDataFormData = yup.InferType<typeof personalDataSchema>;

