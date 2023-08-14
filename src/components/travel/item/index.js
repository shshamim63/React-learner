const Item = ({item, removeItem, handleToggleCheck}) => {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => handleToggleCheck(item.id)}></input>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity}  {item.description}</span>
      <button className="delete" onClick={() => removeItem(item.id)}>❌</button>
    </li>
  )
}

export default Item