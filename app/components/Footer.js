import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <Image
                    src="/app-logo.png"
                    alt="Balorath"
                    width={32}
                    height={32}
                    className={styles.logoImage}
                />
                <span>Balorath</span>
            </div>
            <p className={styles.footerTagline}>Free Gym Workout Tracker</p>
            <div className={styles.footerLinks}>
                <Link href="/support.html">Support</Link>
                <Link href="/privacy.html">Privacy Policy</Link>
                <a href="mailto:support@balorath.com">support@balorath.com</a>
            </div>
            <p className={styles.footerCopyright}>
                © 2026 Balorath. All rights reserved.
            </p>
        </footer>
    );
}
