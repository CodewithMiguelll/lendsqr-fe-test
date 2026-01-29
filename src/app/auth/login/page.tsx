import styles from "../../styles/login.module.scss";
import Logo from '@/assets/logo.png'
import Illustration from '@/assets/pablo-sign-in 1.svg'
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      {/* Left Side: Logo and Illustration */}
      <div className={styles.illustrationSide}>
        <div className={styles.logoWrapper}>
          <Image src={Logo} alt="Lendsqr Logo" width={150} height={30} />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={Illustration}
            alt="Welcome Illustration"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Right Side: Form */}
      <div className={styles.formSide}>
        <div className={styles.formWrapper}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" />
              <button type="button" className={styles.showBtn}>
                SHOW
              </button>
            </div>

            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>

            <Link href="/">
              <button type="submit" className={styles.loginBtn}>
                LOG IN
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
