import React, { Component } from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

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
        const list = await this.getRedItems(data);
        this.setState({
            inventoryList: data,
            redItems: list
        });
        
        return data;
    }

    async componentDidMount() {
        this.timer = setInterval(() => this.getInventoryData(), 1000);
            
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    getRedItems(inventoryList) {
        let redItems = [];
        let userLowSetting = .25;
        inventoryList.forEach(item => {
            if((item.startweight * userLowSetting ) >= item.currentweight) {
            redItems.push(item);
            }
        });
        return redItems;
    }

    render() {
        return(
            <div className="dashboard-main">
                <DashboardLeft />
                <div className="dashboard-right">
                    <DashboardRight inventoryList={this.state.inventoryList} redItems={this.state.redItems} currentUser={this.state.currentUser} itemInHand={this.state.itemInHand}/>
                </div>
            </div>
        );
    };
}

export default DashboardMain;