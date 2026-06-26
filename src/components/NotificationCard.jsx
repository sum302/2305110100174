import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

export function NotificationCard({
  notification,
  index,
}) {
  const viewedNotifications =
    JSON.parse(
      localStorage.getItem(
        "viewedNotifications"
      ) || "[]"
    );

  const isNew =
    !viewedNotifications.includes(
      notification.ID
    );

  const handleClick = () => {
    if (isNew) {
      const updated = [
        ...viewedNotifications,
        notification.ID,
      ];

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(updated)
      );
    }
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        border: isNew
          ? "2px solid #1976d2"
          : "none",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          #{index + 1} • {notification.Type}
        </Typography>

        {isNew && (
          <Chip
            label="NEW"
            color="primary"
            size="small"
            sx={{ mb: 1 }}
          />
        )}

        <Typography variant="body1">
          {notification.Message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}