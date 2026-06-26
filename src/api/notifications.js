export async function fetchNotifications() {
  return {
    notifications: [
      {
        ID: 1,
        Type: "Placement",
        Message: "Google placement drive tomorrow",
        Timestamp: "2026-06-26 10:00:00",
      },
      {
        ID: 2,
        Type: "Result",
        Message: "Semester results published",
        Timestamp: "2026-06-26 15:30:00",
      },
      {
        ID: 3,
        Type: "Event",
        Message: "Hackathon starts this weekend",
        Timestamp: "2026-06-26 10:00:00",
      },
    ],
  };
}
