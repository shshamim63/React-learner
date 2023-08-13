import './index.css'

const initialItems = [
  {
    id: 1,
    description: 'Passport',
    quantity: 2,
    packed: true
  },
  {
    id: 2,
    description: 'Socks',
    quantity: 12,
    packed: false
  }
]

const Item = ({item}) => {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity}  {item.description}</span>
      <button className="">❌</button>
    </li>
  )
}

const PackingList = () => {
  return (
    <div className="list">
      <ul className="list-container">
        {initialItems.map(item => <Item key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default PackingList