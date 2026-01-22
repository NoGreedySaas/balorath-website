import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./privacy.module.css";

export const metadata = {
    title: "Privacy Policy - Balorath",
    description: "Privacy Policy for Balorath, the free gym workout tracker for iOS.",
};

export default function PrivacyPage() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                {/* Page Header */}
                <div className={styles.pageHeader}>
                    <h1>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last updated: January 22, 2026</p>
                </div>

                {/* Highlight Box */}
                <div className={styles.highlightBox}>
                    <p>
                        <strong>TL;DR:</strong> Balorath stores all your workout data locally on your device.
                        We don't collect, store, or have access to your personal data.
                    </p>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <section className={styles.contentSection}>
                        <h2>Data You Provide</h2>
                        <p>When you use Balorath, you may enter:</p>
                        <ul>
                            <li>Workout data (exercises, sets, reps, weights)</li>
                            <li>Custom exercises you create</li>
                            <li>Gym equipment settings</li>
                            <li>Profile information (name, gender for equipment defaults)</li>
                        </ul>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Where Your Data is Stored</h2>
                        <p>
                            All data is stored <strong>locally on your device</strong> using Apple's Core Data framework.
                            Your workout data never leaves your device unless you explicitly enable iCloud sync.
                        </p>
                        <p>
                            If you enable iCloud sync, your data is synced securely through Apple's iCloud infrastructure
                            to your other Apple devices. We do not have access to your iCloud data.
                        </p>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Apple Health Integration</h2>
                        <p>
                            If you choose to enable Apple Health integration, Balorath can write workout data to the Health app.
                            This integration is entirely optional and controlled by you through iOS settings.
                            We only write data; we do not read your health data.
                        </p>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Crash Reporting</h2>
                        <p>Balorath uses Firebase Crashlytics to collect crash reports and improve app stability. This service:</p>
                        <ul>
                            <li>Only activates when the app crashes</li>
                            <li>Collects device type, OS version, and crash stack traces</li>
                            <li>Does not collect any personally identifiable information</li>
                            <li>Does not collect your workout data or health information</li>
                            <li>Helps us identify and fix bugs quickly</li>
                        </ul>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Data We Do NOT Collect</h2>
                        <ul>
                            <li>Personal information (name, email, phone)</li>
                            <li>Location data</li>
                            <li>Device identifiers for tracking</li>
                            <li>Workout or health data</li>
                            <li>Any data for advertising purposes</li>
                        </ul>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Third-Party Services</h2>
                        <p>Balorath integrates with:</p>
                        <ul>
                            <li><strong>Apple iCloud</strong> — Optional sync (Apple's privacy policy applies)</li>
                            <li><strong>Apple Health</strong> — Optional workout export (Apple's privacy policy applies)</li>
                            <li>
                                <strong>Firebase Crashlytics</strong> — Crash reporting (
                                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
                                    Firebase privacy policy
                                </a>)
                            </li>
                        </ul>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Data Deletion</h2>
                        <p>You can delete all your data at any time by:</p>
                        <ul>
                            <li>Deleting individual workouts within the app</li>
                            <li>Uninstalling the app (removes all local data)</li>
                            <li>Disabling iCloud sync and deleting from iCloud</li>
                        </ul>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Children's Privacy</h2>
                        <p>Balorath is not directed at children under 13. We do not knowingly collect information from children.</p>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. Any changes will be posted on this page
                            with an updated revision date.
                        </p>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Contact</h2>
                        <p>
                            If you have questions about this privacy policy, please contact us at{" "}
                            <a href="mailto:support@balorath.com">support@balorath.com</a>.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
