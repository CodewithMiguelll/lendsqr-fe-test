"use client"; // Next.js App Router: ensures this is a client component

import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

export default function Dashboard() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://api.json-generator.com/templates/Im4PD7lB69oR/data",
          {
            headers: {
              Authorization: "Bearer feqw1fwrt60rfnijhv96rfgc5tgcugg3vfc8lhtf",
            },
          },
        );

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th className={styles.hideOnMobile}>Phone No.</th>
            <th className={styles.hideOnMobile}>Date Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className={styles.hideOnMobile}>{user.phone}</td>
              <td className={styles.hideOnMobile}>{user.dateJoined}</td>
              <td>
                <span
                  className={`${styles.status} ${styles[user.status.toLowerCase()]}`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
