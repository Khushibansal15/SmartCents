// src/pages/SelectNecessitiesWants.js
import React, { useState } from 'react';
import SelectItems from './SelectItems';
import { useNavigate } from 'react-router-dom';
import './selectNecessitiesWants.css';


const SelectNecessitiesWants = ({ onItemsSubmit }) => {
  const [items, setItems] = useState([
    { id: 'monthlyRent', name: 'Monthly rent' },
    { id: 'grocery', name: 'Grocery' },
    { id: 'transportation', name: 'Transportation' },
    { id: 'monthlyBills', name: 'Monthly Bills' },
    { id: 'diningOut' , name: 'Dining Out'},
    { id: 'holidays' , name: 'Holidays'},
    { id: 'entertainmentSubscriptions' , name: 'Entertainment Subscriptions'},
    { id: 'clothesShopping' , name: 'Clothes Shopping'},
    // Add more items as needed
  ]);
  const [necessities, setNecessities] = useState([]);
  const [wants, setWants] = useState([]);
  const navigate = useNavigate();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) return;

    const draggedItem = items[source.index];

    if (destination.droppableId === 'necessities') {
      setNecessities([...necessities, draggedItem]);
    } else if (destination.droppableId === 'wants') {
      setWants([...wants, draggedItem]);
    }

    setItems(items.filter((item, index) => index !== source.index));
  };

  const handleDone = () => {
    onItemsSubmit({ necessities, wants });
    navigate('/budget');
  };

  return (
    <div className='selectionContent'>
      <h2>Select Necessities and Wants</h2>
      <div className='underline'></div>
      <p><span>Necessities</span> are expenses that you can't avoid—payments for all the essentials that would be difficult to live without. (For example: Housing, Transportation, Insurance, Gas and electricity, Food.)<br></br><span>Wants</span> are defined as non-essential expenses—things that you choose to spend your money on, although you could live without them if you had to. (For example: Travel, Entertainment, Designer clothing, Gym memberships, Coffeehouse drinks.)</p>
      <SelectItems items={items} necessities={necessities} wants={wants} onDragEnd={handleDragEnd} />
      <button onClick={handleDone}>Done</button>
    </div>
  );
};

export default SelectNecessitiesWants;
