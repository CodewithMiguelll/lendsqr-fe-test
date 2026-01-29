import styles from "../app/styles/page.module.scss";
import {
  UsersRound,
  PiggyBank,
  HandCoins,
} from "lucide-react";
import Card from "./components/card";
import SideBar from "./components/sidebar";
import Dashboard from "./components/dashboard";


export default function Home() {
  return (
    <div className={styles.page}>
    {/* Sidebar Component */}
      <SideBar />
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
  );
}
