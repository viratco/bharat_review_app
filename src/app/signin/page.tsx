"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.page}>
      <Link href="/" className={styles.backArrow} aria-label="Go back to home page">
        <Image src="/arrow_back.svg" alt="Back" width={24} height={24} />
      </Link>

      <main className={styles.main}>
        {/* This div groups all the content that should stay at the top */}
        <div>
          <h1>Welcome Back, BharatReviews!</h1>
          <p className={styles.subheading}>We're thrilled to have you back! Log in to Shopio and shop till you drop.</p>

          <div className={styles.formField}>
            <div className={styles.inputContainer}>
              <Image src="/mail.svg" alt="Email" width={24} height={24} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.inputField}
                aria-label="Email address"
              />
            </div>
            <svg className={styles.dividerLine} viewBox="0 0 368 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H367" strokeLinecap="round"/>
            </svg>
          </div>

          <div className={styles.formField}>
            <div className={styles.inputContainer}>
              <Image src="/lock.svg" alt="Password" width={24} height={24} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className={styles.inputField}
                aria-label="Password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.visibilityToggle} aria-label="Toggle password visibility">
                <Image src="/visibility_off.svg" alt="Toggle visibility" width={24} height={24} />
              </button>
            </div>
            <svg className={styles.dividerLine} viewBox="0 0 368 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H367" strokeLinecap="round"/>
            </svg>
          </div>

          <div className={styles.optionsContainer}>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="rememberMe" className={styles.checkbox} />
              <label htmlFor="rememberMe" className={styles.rememberLabel}>Remember Me</label>
            </div>
            <Link href="/forgot-password" className={styles.forgotPasswordLink}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>

          <p className={styles.signupPrompt}>
            Don’t have an account?{' '}
            <Link href="/signup" className={styles.signupLink}>
              Sign Up
            </Link>
          </p>
        </div>

        {/* This p is a direct child of main, so it gets pushed to the bottom */}
        <p className={styles.termsPrompt}>
          By continuing, I agree to{' '}
          <Link href="/terms" className={styles.termsLink}>
            Terms of Conditions
          </Link>
          {' and '}
          <Link href="/privacy" className={styles.termsLink}>
            Privacy Policy
          </Link>
        </p>
      </main>
    </div>
  );
}

