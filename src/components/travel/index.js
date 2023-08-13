import Logo from "./logo"
import Form from "./form"
import PackingList from "./packing-list"
import Status from "./status"

const Travel = () => {
  return (
    <div className="travel">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  )
}

export default Travel