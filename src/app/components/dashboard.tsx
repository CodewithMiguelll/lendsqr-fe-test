"use client"; // Next.js App Router: ensures this is a client component

import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { ListFilter } from "lucide-react";

interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

export default function Dashboard() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const ITEMS_PER_PAGE = 8;
    const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };


  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    username: "",
    organization: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
  });


  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedData = data.slice(startIndex, endIndex);
  const showingFrom = startIndex + 1;
  const showingTo = Math.min(endIndex, totalItems);


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
            <th onClick={toggleFilter} className={styles.tableHeader}>
              ORGANIZATION <ListFilter size={16} />
            </th>
            <th>
              Username <ListFilter size={16} />
            </th>
            <th>
              Email <ListFilter size={16} />
            </th>
            <th className={styles.hideOnMobile}>
              Phone No. <ListFilter size={16} />
            </th>
            <th className={styles.hideOnMobile}>
              Date Joined <ListFilter size={16} />
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className={styles.hideOnMobile}>{user.phoneNumber}</td>
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
      {isFilterVisible && (
        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label>Organization</label>
            <select
              value={filters.organization}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  organization: e.target.value,
                }))
              }
            >
              <option value="">Select</option>
              {/* Map your organizations here */}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="User"
              value={filters.username}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>

          <div className={styles.filterGroup}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={filters.email}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className={styles.filterGroup}>
            <label>Date</label>
            <input
              type="date"
              value={filters.dateJoined}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, dateJoined: e.target.value }))
              }
            />
          </div>

          <div className={styles.filterGroup}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              value={filters.phoneNumber}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
            />
          </div>

          <div className={styles.filterActions}>
            <button className={styles.resetBtn}>Reset</button>
            <button className={styles.submitBtn}>Filter</button>
          </div>
        </div>
      )}
      <div className={styles.pagination}>
        <p className={styles.pageInfo}>
          Showing {showingFrom}–{showingTo} of {totalItems}
        </p>

        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage ? styles.activePage : styles.pageButton
              }
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
