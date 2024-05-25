import {
	FC,
	ChangeEvent,
	useEffect,
	useState
} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { toast, Toaster } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	Image,
	Input,
	Link,
	useDisclosure
} from "@nextui-org/react";

import PersonalDataModel from "../../model";
import { PersonalDataInput } from "../personalDataInput";
import { personalDataSchema, PersonalDataFormData } from "../../lib";
import {
	ErrorNotice,
	Loader,
	Payment
} from "@shared/ui";
import { logout } from "@shared/lib";

import DefaultAvatarIcon from "@assets/svg/empty-user-avatar.png";
import CameraIcon from "@assets/svg/camera-icon.svg";
import "./PersonalData.scss";

const PersonalData: FC = observer(() => {
	const navigate = useNavigate();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { user, loading, error } = PersonalDataModel;

	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [file, setFile] = useState<File>();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }} = useForm<PersonalDataFormData>({
		resolver: yupResolver(personalDataSchema)
	});

	useEffect(() => {
		PersonalDataModel.getPersonalData();
	}, []);

	useEffect(() => {
		setValue("first_name", user?.first_name || "");
		setValue("last_name", user?.last_name || "");
		setValue("phone_number", user?.phone_number || "");
	}, [user, setValue]);

	const onSubmit = (data: PersonalDataFormData) => {
		if (!isOpen) {
			toast.promise(PersonalDataModel.updatePersonalData(file ? {...data, photo: file} : data), {
				loading: "Загрузка...",
				success: "Ваши данные успешно сохранены",
				error: "Ошибка обновления данных. Попробуйте еще раз"
			});
		}
	};

	const logoutFromAccount = () => {
		logout();
		navigate("/");
	};

	const deleteAccount = async () => {
		await PersonalDataModel.deletePersonalData();
		navigate("/");
	};

	const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const url = URL.createObjectURL(file);
			setImageUrl(url);
			setFile(file);
		}
	}

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <ErrorNotice />;
	}

	return (
		<>
			<Card shadow="sm" radius="lg">
				<CardBody>
					<form className="personal-data flex-column" onSubmit={handleSubmit(onSubmit)}>
						<div className="personal-data__content flex-column">
							<div className="personal-data__content_info flex-column">
								<div className="personal-data__info_avatar-wrapper personal-data__info_avatar-size">
									<Avatar
										isBordered
										className="personal-data__info_avatar personal-data__info_avatar-size"
										src={imageUrl || user?.photo_url || DefaultAvatarIcon}
										alt="avatar"
									/>
									<label className="personal-data__info_avatar-overlay" htmlFor="avatarUpload">
										<Image src={CameraIcon} alt="avatar hover"/>
									</label>
									<input
										id="avatarUpload"
										className="personal-data__info_upload"
										type="file"
										accept="image/*"
										onChange={handleFileInputChange}
									/>
								</div>
								<div className="personal-data__info_inputs flex-row">
									<PersonalDataInput
										type="text"
										variant="bordered"
										label="Имя"
										defaultValue={user?.first_name ?? ""}
										isInvalid={!!errors.first_name?.message}
										errorMessage={errors.first_name?.message ?? ""}
										{...register("first_name")}
									/>
									<PersonalDataInput
										type="text"
										variant="bordered"
										label="Фамилия"
										defaultValue={user?.last_name ?? ""}
										isInvalid={!!errors.last_name?.message}
										errorMessage={errors.last_name?.message ?? ""}
										{...register("last_name")}
									/>
									<PersonalDataInput
										type="tel"
										variant="bordered"
										label="Телефон"
										defaultValue={user?.phone_number ?? ""}
										isInvalid={!!errors.phone_number?.message}
										errorMessage={errors.phone_number?.message ?? ""}
										{...register("phone_number")}
									/>
									<Input
										isDisabled
										type="email"
										value={user?.email}
										variant="bordered"
										label="Email"
									/>
								</div>
							</div>
							<div className="personal-data__pay flex-column">
								<h1 className="personal-data__pay_title">Способ оплаты</h1>
								<Payment
									isOpen={isOpen}
									onOpen={onOpen}
									onOpenChange={onOpenChange}
								/>
							</div>
						</div>
						<div className="personal-data__actions flex-column">
							<Button color="primary" type="submit">Сохранить изменения</Button>
							<div className="personal-data__actions_links flex-column">
								<Link color="danger" onClick={logoutFromAccount}>Выйти из аккаунта</Link>
								<Link color="primary" onClick={deleteAccount}>Удалить профиль</Link>
							</div>
						</div>
					</form>
				</CardBody>
			</Card>
			<Toaster />
		</>
	);
});

export { PersonalData };
