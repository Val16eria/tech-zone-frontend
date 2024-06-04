import { FC } from "react";
import { Button, Link } from "@nextui-org/react";
import { toast } from "sonner";

import { setConsentCookie } from "@shared/lib";

import "./Cookie.scss";

const Cookie: FC = () => {
	const handleConsentCookie = () => {
		setConsentCookie();
		toast.dismiss();
	};

	return (
		<div className="cookie flex-column">
			<h1 className="cookie__title">Управление файлами cookie</h1>
			<div className="cookie__content flex-column">
				<p className="cookie__content_description">
					Наш веб-сайт использует файлы cookie, чтобы обеспечить вам наилучший опыт, пока вы находитесь здесь.
					Используя этот веб-сайт,
					вы соглашаетесь с нашей <Link href="/policy" size="sm">политикой использования файлов cookie.</Link>
				</p>
				<div className="cookie__content_btn">
					<Button
						fullWidth={false}
						onClick={handleConsentCookie}
						color="primary"
						size="sm"
					>
						Принять все
					</Button>
				</div>
			</div>
		</div>
	);
};

export { Cookie };
