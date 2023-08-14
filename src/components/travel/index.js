import Logo from "./logo"
import Form from "./form"
import PackingList from "./packing-list"
import Status from "./status"
import { useState } from "react"

const Travel = () => {
  const [packingItem, setPackingItem] = useState([])

  const handleAddItem = (newItem) => {
    setPackingItem([...packingItem, newItem])
  }

  const handleDeleteItem = (id) => {
    setPackingItem(packingItem.filter(item => item.id !== id))
  }

  const handleToggleCheck = (id) => {
    setPackingItem(packingItem.map(item => item.id === id ? {...item, packed: !item.packed } : item))
  }

  return (
    <div className="travel">
      <Logo />
      <Form addItem={handleAddItem}/>
      <PackingList items={packingItem} handleDeleteItem={handleDeleteItem} handleToggleCheck={handleToggleCheck}/>
      <Status items={packingItem}/>
    </div>
  )
}

export default Travel