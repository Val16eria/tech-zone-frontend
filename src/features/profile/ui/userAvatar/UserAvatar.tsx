import {
	FC,
	ChangeEvent,
	SetStateAction,
	Dispatch,
	useState,
	useRef
} from "react";
import { toast, Toaster } from "sonner";
import { observer } from "mobx-react-lite";
import {
	Avatar,
	Button,
	Image,
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@nextui-org/react";

import PersonalDataModel from "@features/profile/model";

import DefaultAvatarIcon from "@assets/svg/empty-user-avatar.png";
import CameraIcon from "@assets/svg/camera-icon.svg";
import "./UserAvatar.scss";

interface IUserAvatar {
	user_photo?: string;
	setFile: Dispatch<SetStateAction<File | undefined>>;
}

const UserAvatar: FC<IUserAvatar> = observer(({ user_photo, setFile }) => {
	const [isOpen, setOpen] = useState(false);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const url = URL.createObjectURL(file);
			setImageUrl(url);
			setFile(file);
			toast.info("Нажмите на кнопку \"Сохранить изменения\", чтобы обновить фото")
		}
	}

	const handleDeletePhoto = async () => {
		toast.promise(PersonalDataModel.deletePhoto(), {
			loading: "Загрузка...",
			success: "Ваше фото успешно удалено",
			error: "Произошла ошибка удаления фото. Поппробуйте еще раз"
		});
		await PersonalDataModel.getPersonalData();
	};

	const handleOpenFileDialog = () => {
		fileInputRef.current?.click();
	};

	return (
		<>
			<Popover
				isOpen={isOpen}
				onOpenChange={(open) => setOpen(open)}
				placement="right"
			>
				<PopoverTrigger>
					<div className="user-avatar user-avatar__container">
						<Avatar
							isBordered
							className="user-avatar__img user-avatar__container"
							src={imageUrl || user_photo || DefaultAvatarIcon}
							alt="avatar"
						/>
						<div className="user-avatar__img_overlay">
							<Image src={CameraIcon} alt="avatar hover"/>
						</div>
						<input
							id="avatarUpload"
							className="user-avatar__img_upload"
							type="file"
							accept="image/*"
							onChange={handleFileInputChange}
							ref={fileInputRef}
						/>
					</div>
				</PopoverTrigger>
				<PopoverContent>
					<Button
						fullWidth
						variant="light"
						color="primary"
						onClick={handleOpenFileDialog}
					>
						Изменить фото
					</Button>
					<Button
						fullWidth
						variant="light"
						color="danger"
						onClick={handleDeletePhoto}
					>
						Удалить фото
					</Button>
				</PopoverContent>
			</Popover>
			<Toaster />
		</>
	);
});

export { UserAvatar };
