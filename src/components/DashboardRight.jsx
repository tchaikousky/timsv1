import React from 'react';
import DashboardInventory from './DashboardInventory';
import DashboardRedItems from './DashboardRedItems';
import DashboardItemInHand from './DashboardItemInHand';

function DashboardRight(props) {
    const { inventoryList, redItems, inHand } = props;
    return(
        <div>
            <DashboardInventory inventory={inventoryList} />
            <DashboardRedItems redItems={redItems}/>
            <DashboardItemInHand inHand={inHand} />
        </div>
    )  
}

export default DashboardRight;