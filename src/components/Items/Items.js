import React from 'react';
import ItemsList from './ItemsList';
import classes from './Items.module.css';
import { useStoreItem } from '../../hooks/use-storeItem';

const Items = () => {
  const { items, error } = useStoreItem();

  if (error) {
    return <h2 className={classes.error}>{error}</h2>;
  } else
    return (
      <div className={classes.items}>
        {items.map((item) => (
          <ItemsList key={item.id} id={item.id} items={item} />
        ))}
      </div>
    );
};

export default Items;
