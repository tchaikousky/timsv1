import React from 'react';

function DashboardInventory(props) {
    const { inventory } = props;
    const inventoryList = <table className="inventory-table">
                            <thead>
                                <tr>
                                    <th className="product">Product</th>
                                    <th className="weight">Start Weight</th>
                                    <th className="weight">Current Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map(item =>
                                <tr key= {item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.startweight}</td>
                                    <td>{item.currentweight}</td>                 
                                </tr>)}
                            </tbody>
                          </table>
    return (
        <div className="dashboard-inventory scrollable">
            <div className="table-title">
                <h4>All Items</h4>
            </div>
            {inventoryList}
        </div>
    );
};

export default DashboardInventory;