import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/app-logo.png"
                    alt="Balorath"
                    width={40}
                    height={40}
                    className={styles.logoImage}
                />
                <span>Balorath</span>
            </Link>
        </header>
    );
}
