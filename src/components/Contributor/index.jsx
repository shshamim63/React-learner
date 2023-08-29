import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import { customColor } from "../../style";

const Contributor = ({ user, handleOnSelectFriend, selectedFriend, index }) => {
  let owingText = "";

  if (user.balance < 0) {
    owingText = `You owe ${user.name} ${Math.abs(user.balance)}$`;
  } else if (user.balance > 0) {
    owingText = `${user.name} owe You ${Math.abs(user.balance)}$`;
  } else {
    owingText = "You both are even";
  }

  return (
    <ListItem
      sx={{
        background: customColor.red.light,
        width: "95%",
        margin: "auto",
        borderRadius: 5,
        ...(index > 0 && { marginTop: 1 }),
      }}
      alignItems="flex-start"
      secondaryAction={
        <Button
          edge="end"
          variant="contained"
          size="small"
          onClick={() => {
            handleOnSelectFriend(user);
          }}
        >
          {selectedFriend && selectedFriend.id === user.id ? "Close" : "Select"}
        </Button>
      }
      disablePadding
    >
      <ListItemAvatar sx={{ marginLeft: 1 }}>
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
              {owingText}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default Contributor;
