import { FC, PropsWithChildren } from "react";
import {
	Modal as ModalContainer,
	Button,
	ModalBody,
	ModalContent,
	useDisclosure, ModalHeader
} from "@nextui-org/react";

import "./Modal.scss";

interface IModal {
	buttonTxt: string;
}

const Modal: FC<PropsWithChildren<IModal>> = ({ buttonTxt, children }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				size="lg"
				variant="bordered"
				onPress={onOpen}
			>
				{buttonTxt}
			</Button>
			<ModalContainer
				className="modal-container"
				scrollBehavior="inside"
				backdrop="opaque"
				placement="center"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					<ModalHeader className="flex flex-column gap-1">
						{buttonTxt}
					</ModalHeader>
					<ModalBody className="modal-container__body">
						{children}
					</ModalBody>
				</ModalContent>

			</ModalContainer>
		</>
	);
};

export { Modal };
