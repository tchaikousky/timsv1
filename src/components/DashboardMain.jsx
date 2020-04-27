import React, { Component } from 'react';
import DashboardList from './DashboardList';
import DashboardInventory from './DashboardInventory';
import DashboardRedItems from './DashboardRedItems';
import DashboardGreenItems from './DashboardGreenItems';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 1,
            inventoryList: [],
            itemsToGet: [],
            redItems: [],
            itemInHand: {}
        }
    }

    getInventoryData = async () => {
        const response = await fetch(`https://timsapi.herokuapp.com/inventory/${this.state.currentUser}`);
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const data = await this.getInventoryData();
        const list = await this.getRedItems(data);
        this.setState({
            inventoryList: data,
            redItems: list
        });    
    };

    getRedItems(inventoryList) {
        let redItems = [];
        inventoryList.forEach(item => {
            if((item.startweight * .25) >= item.currentweight) {
            redItems.push(item);
            }
        });
        return redItems;
    }

    render() {
        return(
            <div className="dashboard-main">
                <DashboardList />
                <div className="dashboard-right">
                    <DashboardInventory inventory={this.state.inventoryList} />
                    <DashboardRedItems redItems={this.state.redItems} />
                    <DashboardGreenItems />
                </div>
            </div>
        );
    };
}

export default DashboardMain;