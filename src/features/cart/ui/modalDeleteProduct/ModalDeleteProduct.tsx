import { FC } from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from "@nextui-org/react";

import "./ModalDeleteProduct.scss";

interface IModalDeleteProduct {
	isOpen: boolean;
	onOpenChange: () => void;
	onAction: () => void;
}

const ModalDeleteProduct: FC<IModalDeleteProduct> = ({ isOpen, onOpenChange, onAction }) => {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>
							Удалить товары
						</ModalHeader>
						<ModalBody>
							<p>Вы точно хотите удалить выбранные товары?</p>
							<p>Отменить данное действие будет невозможно.</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Отменить
							</Button>
							<Button color="primary" onPress={() => {
								onAction();
								onClose();
							}}>
								Удалить
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export { ModalDeleteProduct };
