import './index.css'

const Status = ({items}) => {
  const numItems = items.length
  
  if(!numItems) return <p className='footer'>Start Addinng some items to your list</p>

  const numPackedItems = items.filter(item => item.packed === true).length
  
  return (
    <footer className="status">{ numItems === numPackedItems ? 'You have everything ready to go' : `You have ${numItems} items on your list, and you already packed ${numPackedItems}`}</footer>
  )
}

export default Status