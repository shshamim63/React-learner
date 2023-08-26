import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

const Contributor = ({ user, handleOnSelectFriend, selectedFriend }) => {
  let owingText = "";

  if (user.balance < 0) {
    owingText = `You owe ${user.name} ${user.balance}$`;
  } else if (user.balance > 0) {
    owingText = `${user.name} owe You ${user.balance}$`;
  } else {
    owingText = "You both are even";
  }

  return (
    <ListItem
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
              {owingText}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default Contributor;
