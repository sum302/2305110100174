import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../middleware/logger";

const WEIGHTS = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        setError("");

        await Log(
          "frontend",
          "info",
          "hook",
          "Fetching notifications"
        );

        const data = await fetchNotifications();

        console.log("DATA:", data);

        const ranked = (data.notifications || [])
          .map((notification) => ({
            ...notification,
            priority:
              (WEIGHTS[notification.Type] || 0) * 1000000000 +
              new Date(notification.Timestamp).getTime(),
          }))
          .sort((a, b) => b.priority - a.priority);

        console.log("RANKED:", ranked);

        setNotifications(ranked);
        setTotal(ranked.length);

        await Log(
          "frontend",
          "info",
          "hook",
          `Loaded ${ranked.length} notifications`
        );
      } catch (err) {
        console.error(err);

        setError(
          err?.message ||
            "Failed to load notifications"
        );

        await Log(
          "frontend",
          "error",
          "hook",
          err?.message || "Unknown error"
        );
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(total / 10)
  );

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}