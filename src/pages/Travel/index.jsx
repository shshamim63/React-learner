import { useState } from "react";

import TravelLogo from "../../components/TravelLogo";
import TravelForm from "../../components/TravelForm";
import PackingList from "../../components/PackingList";
import PackingSummary from "../../components/PackingSummary";

const Travel = () => {
  const [packingItem, setPackingItem] = useState([]);

  const handleAddItem = (newItem) => {
    setPackingItem([...packingItem, newItem]);
  };

  const handleDeleteItem = (id) => {
    setPackingItem(packingItem.filter((item) => item.id !== id));
  };

  const handleToggleCheck = (id) => {
    setPackingItem(
      packingItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <>
      <TravelLogo />
      <TravelForm addItem={handleAddItem} />
      <PackingList
        items={packingItem}
        handleDeleteItem={handleDeleteItem}
        handleToggleCheck={handleToggleCheck}
      />
      <PackingSummary items={packingItem} />
    </>
  );
};

export default Travel;
