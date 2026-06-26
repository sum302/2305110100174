import { useState } from "react";
import {
  Box,
  Button,
  Stack,
} from "@mui/material";

import { NotificationsPage } from "./pages/NotificationsPage";
import { PriorityNotifications } from "./pages/PriorityNotifications";

export default function App() {
  const [page, setPage] =
    useState("all");

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        <Button
          variant={
            page === "all"
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            setPage("all")
          }
        >
          All Notifications
        </Button>

        <Button
          variant={
            page === "priority"
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            setPage("priority")
          }
        >
          Priority
        </Button>
      </Stack>

      {page === "all" ? (
        <NotificationsPage />
      ) : (
        <PriorityNotifications />
      )}
    </Box>
  );
}