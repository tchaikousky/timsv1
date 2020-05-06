import React from 'react'; 

function DashboardList(props) {
    const { shoppingList, redItems, userId } = props
    const emptyShoppingList = <div className="no-items"><p>No Items To Display.</p></div>;

    const shoppingListTable = <table className="shopping-list-table">
                                <thead>
                                    <tr>
                                        <th className="product">Product</th>
                                        <th className="price">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {redItems.map(item =>
                                        <tr key={item.productid} className="add-delete-sign">
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>               
                                        </tr>)}
                                    {shoppingList.map(item =>
                                        <tr key={item.id} className="add-delete-sign">
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>               
                                        </tr>)}
                                </tbody>
                            </table>
    
    async function handleAdd() {
        console.log(shoppingList);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ listToAdd: shoppingList, userId: userId })
        }

        const response = await fetch('http://localhost:4000/inventory/users/input/list', requestOptions);
        const data = await response.json();

        console.log('ADDED TO INVENTORY: ', data)
    }

    if(shoppingList.length === 0 && redItems.length === 0) {
        return(
            <div className="dashboard-left-components">
                <h2>My List</h2>
                <div className="searchedItems">
                    {emptyShoppingList}
                </div>
            </div>
        )
    }else {
        return(
            <div className="dashboard-left-components">
                <div className="searchedItems scrollable" >
                    <div className="table-title">
                        <h2>My List</h2>
                    </div>
                    {shoppingListTable}
                </div>
                <button type="button" onClick={handleAdd}>Add Items</button>
            </div>
        );
    };
};


export default DashboardList;