import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.tagline}>Seamless. Smart. Stylish.</p>
        <h1 className={styles.headline}>Create an Account</h1>
        <p className={styles.tagline}>
          Join us and start your shopping journey today.
        </p>
        <div className={styles.authButtons}>
          <button type="button" className={styles.googleButton} aria-label="Sign up with Google">
            <Image src="/Vector.svg" alt="" width={20} height={20} aria-hidden />
            <span>Sign up with Google</span>
          </button>
          <button type="button" className={styles.appleButton} aria-label="Sign in with Apple">
            <Image src="/apple.svg" alt="" width={20} height={20} aria-hidden />
            <span>Sign in with Apple</span>
          </button>
        </div>
        <div className={styles.divider} aria-label="alternative sign in separator">
          <svg className={styles.dividerLine} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 2" height="2" preserveAspectRatio="none">
            <path d="M1.5 1H160" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={styles.dividerText}>or</span>
          <svg className={styles.dividerLine} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 2" height="2" preserveAspectRatio="none">
            <path d="M1.5 1H160" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <button type="button" className={styles.emailButton} aria-label="Sign up with Email">
          Sign up with Email
        </button>
        <p className={styles.signupPrompt}>
          Already have an account?{' '}
          <Link href="/signin" className={styles.signupLink}>Sign In</Link>
        </p>
      </main>
    </div>
  );
}
