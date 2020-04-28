import React from 'react';

function DashboardRedItems(props) {
    const { redItems } = props;
    const emptyRedItems = <div className="no-items"><p>No Items To Display.</p></div>;
    const redItemList = 
        <table className="red-items-table">
            <thead>
                <tr>
                    <th className="product">Product</th>
                    <th className="weight">Start Weight</th>
                    <th className="weight">Current Weight</th>
                </tr>
            </thead>
            <tbody>
                {redItems.map(item => 
                    <tr key={item.productid}>
                        <td>{item.name}</td>
                        <td>{item.startweight}</td>
                        <td>{item.currentweight}</td>                 
                    </tr>)}
            </tbody>
        </table>
    
    if(redItems.length === 0) {
        return (
            <div className="dashboard-red-items">
                {emptyRedItems}
            </div>
        )
    } else {
        return (
            <div className="dashboard-red-items">
                <div className="table-title">
                    <h4>Low Quantity Items</h4>
                </div>
                {redItemList}
            </div>
        ) 
    }
};

export default DashboardRedItems;