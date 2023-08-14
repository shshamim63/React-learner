import { useState } from 'react'
import Item from '../item'
import './index.css'

const sortedType = [
  {
    value:'input',
    innerText: 'Sort by input order'
  },
  {
    value:'description',
    innerText: 'Sort by description'
  },
  {
    value:'quantity',
    innerText: 'Sort by quantity'
  },
  {
    value:'packed',
    innerText: 'Sort by packed'
  }
]

const PackingList = ({items, handleDeleteItem, handleToggleCheck}) => {
  const [sortBy, setSortBy] = useState('input')
  let sortedItem;
  
  if(sortBy === 'input') sortedItem = items
  
  if(sortBy === 'description') sortedItem = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  
  if (sortBy === 'quantity') {
    sortedItem = items.slice().sort((a,b) => a.quantity > b.quantity)
  }
  
  if (sortBy === 'packed') {
    sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  }
  
  return (
    <div className="list">
      <ul className="list-container">
        {sortedItem.map(item => <Item key={item.id} item={item} removeItem={handleDeleteItem}  handleToggleCheck={handleToggleCheck}/>)}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          {sortedType && sortedType.map(item=> <option key={item.value} value={item.value}>{item.innerText}</option>)}
        </select>
      </div>
    </div>
  )
}

export default PackingList