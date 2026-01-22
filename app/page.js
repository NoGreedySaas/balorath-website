import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/app-logo.png"
            alt="Balorath"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <span>Balorath</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Tired of $10/month gym apps?
            </h1>
            <p className={styles.heroSubtitle}>
              Meet Balorath. The gym tracker that's <strong>100% free</strong>.
              No subscriptions. No ads. Just gains.
            </p>
            <div className={styles.heroCta}>
              <a
                href="https://apps.apple.com/app/balorath"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Free on App Store
              </a>
              <div className={styles.qrCode}>
                <div style={{
                  width: 100,
                  height: 100,
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: '#666',
                  borderRadius: 8
                }}>
                  QR Code
                </div>
                <p>Scan to download</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.phoneFrame}>
              <Image
                src="/screenshot-home.png"
                alt="Balorath App - Home Screen"
                width={280}
                height={607}
                className={styles.phoneScreenshot}
              />
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span style={{ fontSize: 24 }}>↓</span>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className={styles.painPoints}>
        <h2 className={styles.sectionTitle}>Sound familiar?</h2>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>💸</div>
            <h3 className={styles.cardTitle}>Surprise Paywalls</h3>
            <p className={styles.cardDescription}>
              "Free" for 2 workouts, then $9.99/month
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📢</div>
            <h3 className={styles.cardTitle}>Constant Ads</h3>
            <p className={styles.cardDescription}>
              Interrupted by full-screen ads every 5 minutes
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🤯</div>
            <h3 className={styles.cardTitle}>Feature Bloat</h3>
            <p className={styles.cardDescription}>
              Overwhelming dashboards and features you never use
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Everything you need. Nothing you don't.</h2>
        <div className={styles.featuresBadge}>
          <span className={styles.badge}>
            ✨ 100% Free • No Ads • No Subscriptions
          </span>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📊</div>
            <h3 className={styles.cardTitle}>Workout Tracking</h3>
            <p className={styles.cardDescription}>
              Log sets, reps, and weights with one tap
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🔢</div>
            <h3 className={styles.cardTitle}>Plate Calculator</h3>
            <p className={styles.cardDescription}>
              See exactly which plates to load on the bar
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⚙️</div>
            <h3 className={styles.cardTitle}>Gym Settings</h3>
            <p className={styles.cardDescription}>
              Customize barbells and plates to match your gym
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>❤️</div>
            <h3 className={styles.cardTitle}>Apple Health Sync</h3>
            <p className={styles.cardDescription}>
              Auto-sync completed workouts to Health app
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📝</div>
            <h3 className={styles.cardTitle}>Workout Templates</h3>
            <p className={styles.cardDescription}>
              Start instantly with 8 pre-built routines
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏆</div>
            <h3 className={styles.cardTitle}>Personal Records</h3>
            <p className={styles.cardDescription}>
              Track PRs and celebrate your progress
            </p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className={styles.appPreview}>
        <h2 className={styles.sectionTitle}>See it in action</h2>
        <div className={styles.screenshotsContainer}>
          <div className={styles.screenshotItem}>
            <Image
              src="/screenshot-templates.png"
              alt="Workout Templates"
              width={200}
              height={433}
              className={styles.screenshot}
            />
            <p className={styles.screenshotCaption}>Browse & start workouts</p>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/screenshot-workout.png"
              alt="Active Workout"
              width={200}
              height={433}
              className={styles.screenshot}
            />
            <p className={styles.screenshotCaption}>Log sets in real-time</p>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/screenshot-plate-calc.png"
              alt="Plate Calculator"
              width={200}
              height={433}
              className={styles.screenshot}
            />
            <p className={styles.screenshotCaption}>Know what to load</p>
          </div>
          <div className={styles.screenshotItem}>
            <Image
              src="/screenshot-home.png"
              alt="Home Dashboard"
              width={200}
              height={433}
              className={styles.screenshot}
            />
            <p className={styles.screenshotCaption}>Track your progress</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2>Ready to track your gains?</h2>
          <a
            href="https://apps.apple.com/app/balorath"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Free on App Store
          </a>
          <p>Available on iOS. Android coming soon.</p>
        </div>
      </section>

      {/* Footer */}
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
          <a href="/support.html">Support</a>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="mailto:support@balorath.com">support@balorath.com</a>
        </div>
        <p className={styles.footerCopyright}>
          © 2026 Balorath. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
