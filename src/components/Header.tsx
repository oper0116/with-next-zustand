import Image from "next/image";

import styles from "~/styles/Home.module.css";

const Header = () => {
	return (
		<div data-testid="header" className={styles.description}>
			<p>
				Get started by editing&nbsp;
				<code className={styles.code}>src/pages/index.tsx</code>
			</p>
			<div>
				<a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
					By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
				</a>
			</div>
		</div>
	);
};

export default Header;
