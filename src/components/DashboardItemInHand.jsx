import React from 'react';

function DashboardItemInHand(props) {
    const { inHand } = props;
    const inventoryList = <table className="item-in-hand-table">
                            <thead>
                                <tr>
                                    <th className="product">Product</th>
                                    <th className="weight">Start Weight</th>
                                    <th className="weight">Current Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inHand.map(item =>
                                <tr key={item.productid}>
                                    <td>{item.name}</td>
                                    <td>{item.startweight}</td>
                                    <td>???</td>                 
                                </tr>)}
                            </tbody>
                        </table>
    return (
        <div className="dashboard-items-in-hand">
            <div className="table-title scrollable">
                <h4>Items In Use</h4>
            </div>
            {inventoryList}
        </div>
    );
};

export default DashboardItemInHand;