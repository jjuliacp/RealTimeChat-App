import { Box, Typography } from "@mui/material";
import { useUsers } from "./hooks/useUsers";

const UserList = () => {
  const { users } = useUsers();

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
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
    </Box>
  );
};

export default UserList;
