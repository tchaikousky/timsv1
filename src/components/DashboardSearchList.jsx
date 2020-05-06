import React from 'react';

function DashboardSearchList(props) {
    const { searchList } = props;
    const emptySearchList = <div className="no-items"><p>No Items To Display.</p></div>;

    function handleSearch(searchParams) {
        searchParams = document.getElementById("searchInput").value;
        props.search(searchParams);
    }

    function handleAddToShoppingList(e) {
        e = document.getElementById(e.target.id);
        console.log(e.id);
        props.addToShoppingList(e.id);
    }

    const searchListTable = <table className="search-list-table">
                            <thead>
                                <tr>
                                    <th className="product">Product</th>
                                    <th className="weight">Price</th>
                                    <th className="price">Add Item?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchList.map(item =>
                                <tr key={item.id} className="add-delete-sign">
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><img src="addSign.png" alt="green button with white plus sign depicting add an item" id={item.id} onClick={handleAddToShoppingList}></img></td>               
                                </tr>)}
                            </tbody>
                          </table>

    if(searchList.length === 0) {
        return(
            <div className="dashboard-left-components-empty">
                <h2>Find An Item</h2>
                <form>
                    <input type="text" name="searchInput" id="searchInput"></input>
                    <button type="button" onClick={handleSearch}>Search</button>
                </form>
                <div className="searchedItems">
                    {emptySearchList}
                </div>
            </div>
            )
    }else {
        return(
            <div className="dashboard-left-components">
                <h2>Find An Item</h2>
                <form>
                    <input type="text" name="searchInput" id="searchInput"></input>
                    <button type="button" onClick={handleSearch}>Search</button>
                </form>
                <div className="searchedItems scrollable" >
                    <div className="table-title">
                    </div>
                    {searchListTable}
                </div>
            </div>
        );
    }
}

export default DashboardSearchList;