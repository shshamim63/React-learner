import { Grid, List } from '@mui/material'

import User from '../user'

const friends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]

const Contributors = () => {
  return (
    <Grid item xs={6} sm={5} md={5} lg={5}>
      <List>
        {friends && (
          [...friends.map((friend) => <User key={friend.id} user={friend}></User>)]
        )}
      </List>
    </Grid>
  )
}

export default Contributors