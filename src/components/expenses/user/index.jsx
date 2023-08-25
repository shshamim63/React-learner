import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

const User = ({ user }) => {
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <Button edge="end" variant="contained" size="small">
          Select
        </Button>
      }
      disablePadding
    >
      <ListItemAvatar>
        <Avatar alt={user.name} src={user.image} />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {user.name}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default User;
