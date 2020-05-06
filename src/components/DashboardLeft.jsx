import React from 'react';
import DashboardList from './DashboardList';
import DashboardSearchList from './DashboardSearchList';

function DashboardLeft(props) {
    const { shoppingList, search, searchList, addToShoppingList, redItems, userId } = props;
    return (
        <div className="dashboard-left">
            <DashboardSearchList search={search} searchList={searchList} addToShoppingList={addToShoppingList} />
            <DashboardList shoppingList={shoppingList} userId={userId} redItems={redItems}/>
        </div>
    );
}

export default DashboardLeft;