import { useState } from "react"
import uuid from 'react-uuid';

const Form = () => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!description && quantity > 0) return
    const newItem = {description, quantity, packed: false, id: uuid()}
    setDescription('')
    setQuantity(1)
  }

  const handleOnChange = (e) => {
    setDescription(e.target.value)
  }

  const handleOnSelectChange = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select value={quantity} onChange={handleOnSelectChange}>
        {Array.from({length: 20}, (_, i) => i+1).map((val) => 
          (<option key={val+1} value={val}>{val}</option>))}
      </select>
      <input type="text" placeholder="item..." value={description} onChange={handleOnChange}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default Form