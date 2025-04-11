import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../../graphql/mutations";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export const Register = () => {
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please, enter a name or nikname");
      return;
    }

    try {
      const { data } = await createUser({
        variables: {
          name,
          isLoggedIn: true,
        },
      });

      console.log("user:", data.createUser);
      localStorage.setItem("user", JSON.stringify(data.createUser));
      navigate("/chat");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 8,
        p: 4,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Welcome to the Chat
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <InputBase
            placeholder=" Enter your Name or Nikname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              px: 2,
              py: 1,
              border: "1px solid #ccc",
              borderRadius: 1,
              backgroundColor: "white",
            }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Start
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
