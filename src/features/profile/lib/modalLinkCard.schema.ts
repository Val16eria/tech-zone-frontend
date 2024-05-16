import * as yup from "yup";

const modalLinkCardSchema = yup.object({
	card_number: yup
		.string()
		.trim()
		.matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Неврный формат номера карты")
		.required("Поле обязательно для заполнения"),
	card_date: yup
		.string()
		.trim()
		.matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Неверный формат")
		.required("Поле обязательно для заполнения"),
	card_cvv: yup
		.string()
		.trim()
		.matches(/^\+?\d{3}$/, "Неврный формат CVC/CVV")
		.required("Поле обязательно для заполнения"),
});

export { modalLinkCardSchema };
export type ModalLinkCardFormData = yup.InferType<typeof modalLinkCardSchema>;
