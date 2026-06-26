import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import { NotificationCard } from "../components/NotificationCard";
import { useNotifications } from "../hooks/useNotifications";

export function PriorityNotifications() {
  const { notifications } =
    useNotifications();

  const topNotifications =
    notifications.slice(0, 5);

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        mb={3}
      >
        Priority Notifications
      </Typography>

      <Stack spacing={2}>
        {topNotifications.map(
          (notification, index) => (
            <NotificationCard
              key={notification.ID}
              notification={
                notification
              }
              index={index}
            />
          )
        )}
      </Stack>
    </Box>
  );
}