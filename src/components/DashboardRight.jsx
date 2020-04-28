import React from 'react';
import DashboardInventory from './DashboardInventory';
import DashboardRedItems from './DashboardRedItems';
import DashboardItemInHand from './DashboardItemInHand';

function DashboardRight(props) {
    const { inventoryList, redItems, itemInHand, currentUser } = props;
    return(
        <div>
            <DashboardInventory inventory={inventoryList} />
            <DashboardRedItems redItems={redItems} />
            <DashboardItemInHand />
        </div>
    )  
}

export default DashboardRight;