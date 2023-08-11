import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Login from './Login';

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;
	console.log(currentPath);

	return (
		<header id={styles.header}>
			<h1>
				<Link href='/' className={currentPath === '/' ? styles.on : ''}>
					Logo
				</Link>
			</h1>

			<ul id={styles.gnb}>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/redirect' className={currentPath === '/redirect' ? styles.on : ''}>
						REDIRECT
					</Link>
				</li>
				<li>
					<Link href='/csr' className={currentPath === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
				<li>
					<Link href='/post' className={currentPath === '/post' ? styles.on : ''}>
						POST
					</Link>
				</li>
			</ul>
			<Login />
		</header>
	);
}

export default Header;
