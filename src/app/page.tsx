import styles from "./page.module.scss";
import {
  Briefcase,
  ChevronDown,
  House,
  HandshakeIcon,
  HandHelping,
  UsersRound,
  UserStar,
  Users,
  PiggyBank,
  UserRoundX,
  Landmark,
  Coins,
  ReceiptText,
  Fan,
  UserCog,
  Scroll,
  ChartColumn,
  SlidersHorizontal,
  Clipboard,
  BadgePercent,
  HandCoins,
} from "lucide-react";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import Card from "./components/card";
import Dashboard from "./components/dashboard";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {

  return (
    <>
      <div className={`${workSans.className} ${styles.page}`}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Briefcase size={24} />
            <span>Switch Organization</span>
            <ChevronDown size={16} />
          </div>
          <div className={styles.dashboard}>
            <House size={24} /> <span>Dashboard</span>
          </div>
          <div className={styles.sidebarMenu}>
            <h4>Customers</h4>
            <ul>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <UsersRound size={20} />
                  </span>{" "}
                  Users
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Users size={20} />
                  </span>
                  Guarantors
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <HandHelping size={20} />
                  </span>
                  Loans
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <HandshakeIcon size={20} />
                  </span>
                  Decision Models
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <PiggyBank size={20} />
                  </span>
                  Savings
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <HandHelping size={20} />
                  </span>
                  Loan Requests
                </Link>
              </li>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <UserStar size={20} />
                  </span>
                  Whitelist
                </Link>
              </li>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <UserRoundX size={16} />
                  </span>
                  Karma
                </Link>
              </li>
            </ul>

            {/* BUSINESSES SECTION */}
            <h4>Businesses</h4>
            <ul>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Briefcase size={20} />
                  </span>{" "}
                  Organizations
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <HandHelping size={20} />
                  </span>
                  Loan Products
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Landmark size={20} />
                  </span>
                  Savings Products
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Coins size={20} />
                  </span>
                  Fees and Charges
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <ReceiptText size={20} />
                  </span>
                  Transactions
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Fan size={20} />
                  </span>
                  Services
                </Link>
              </li>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <UserCog size={20} />
                  </span>
                  Services Account
                </Link>
              </li>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Scroll size={16} />
                  </span>
                  Settlements
                </Link>
              </li>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <ChartColumn size={16} />
                  </span>
                  Reports
                </Link>
              </li>
            </ul>

            <h4>Settings</h4>
            <ul>
              <li>
                <Link className={styles.customersNav} href="#">
                  <span>
                    <SlidersHorizontal size={20} />
                  </span>{" "}
                  Preferences
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <BadgePercent size={20} />
                  </span>
                  Fees and Pricing
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.customersNav} href="#">
                  <span>
                    <Clipboard size={20} />
                  </span>
                  Audit Log
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          {/* Main content goes here */}
          <h1 className={styles.title}>Users</h1>
          <div className={styles.usersOverview}>
            <Card
              icon={<UsersRound size={24} color="#df18ff" />}
              backgroundColor="#eb9df7"
              title="Users"
              description="2,453"
            />
            <Card
              icon={<UsersRound size={24} color="#5718ff" />}
              backgroundColor="#d3bffa"
              title=" Active Users"
              description="2,453"
            />
            <Card
              icon={<HandCoins size={24} color="#f55f44" />}
              backgroundColor="#f8b9b0"
              title="Users With Loans"
              description="12,453"
            />
            <Card
              icon={<PiggyBank size={24} color="#ff3366" />}
              backgroundColor="#fca4ba"
              title="Users With Savings"
              description="102,453"
            />
          </div>
          <Dashboard />
        </div>
      </div>
    </>
  );
}
