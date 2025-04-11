import { Paper, Box, Typography } from "@mui/material";
import { useUsers } from "./hooks/useUsers";

const UserList = () => {
  const { users } = useUsers();

  return (
    <Paper
      sx={{
        p: 4,
        height: "100%",
        backgroundColor: "#FFFFFF",
        color: "#1E2022",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Connected Users
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {users.length === 0 ? (
          <Typography variant="body2">Waiting for users...</Typography>
        ) : (
          users.map((user) => (
            <Typography key={user.id} variant="body2">
              • {user.name}
            </Typography>
          ))
        )}
      </Box>
    </Paper>
  );
};

export default UserList;
