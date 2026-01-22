import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./support.module.css";

export const metadata = {
    title: "Support - Balorath",
    description: "Support and FAQ for Balorath, the free gym workout tracker for iOS.",
};

const faqs = [
    {
        question: "Is Balorath really free?",
        answer: "Yes! There are no subscriptions, no premium tiers, and no ads. Every feature is available from day one."
    },
    {
        question: "Where is my data stored?",
        answer: "All your workout data is stored locally on your device. If you enable iCloud sync, your data syncs across your Apple devices. We don't have access to your data."
    },
    {
        question: "How do I sync with Apple Health?",
        answer: "When you finish your first workout, you'll be prompted to enable Apple Health integration. You can also enable this anytime from Settings → Apple Health."
    },
    {
        question: "Can I create my own exercises?",
        answer: "Absolutely! Go to the Exercises tab and tap the + button to add custom exercises with your preferred settings."
    },
    {
        question: "How do I customize my gym's equipment?",
        answer: "Go to Profile → Gym Settings. You can set your barbell weights, available plates, and dumbbell/machine increments to match your gym exactly."
    },
    {
        question: "I accidentally deleted a workout. Can I recover it?",
        answer: "Unfortunately, deleted workouts cannot be recovered. If you have iCloud sync enabled, your data exists on your other devices until they sync."
    }
];

const features = [
    { icon: "📊", text: "Complete workout tracking" },
    { icon: "🔢", text: "Barbell plate calculator" },
    { icon: "⚙️", text: "Gym equipment settings" },
    { icon: "❤️", text: "Apple Health sync" },
    { icon: "📝", text: "Workout templates" },
    { icon: "🏆", text: "Personal records" },
];

export default function SupportPage() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                {/* Page Title */}
                <div className={styles.pageHeader}>
                    <h1>Support</h1>
                    <p>Everything you need to get the most out of Balorath</p>
                </div>

                {/* Features Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <span>✨</span> What's Included
                        <span className={styles.badge}>100% Free</span>
                    </h2>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <span className={styles.featureIcon}>{feature.icon}</span>
                                <span className={styles.featureText}>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <span>❓</span> Frequently Asked Questions
                    </h2>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        <span>💬</span> Need Help?
                    </h2>
                    <div className={styles.contactCard}>
                        <h3>Get in Touch</h3>
                        <p>Have a question, found a bug, or want to suggest a feature?<br />We'd love to hear from you.</p>
                        <a href="mailto:support@balorath.com" className={styles.emailBtn}>
                            ✉️ Email Support
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
