import React, { Component } from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.user.id,
            inventoryList: [],
            itemsToGet: [],
            redItems: [],
            searchList: [],
            inHand: [],
            shoppingList: [],
            isLoggedIn: false
        }
        this.getSearchResults = this.getSearchResults.bind(this);
        this.addToShoppingList = this.addToShoppingList.bind(this);
    }

    getInventoryData = async () => {
        const response = await fetch(`http://localhost:4000/inventory/${this.state.currentUser}`);
        const data = await response.json();
        const list = await this.getRedItems(data);
        const shoppingList = await this.getList(list);
        const inHandList = await this.getItemInHand(data);
        // console.log(inHandList);
        this.setState({
            inventoryList: data,
            redItems: list,
            inHand: inHandList,
            shoppingList: this.state.shoppingList
        });
        
        return data;
    }

    getSearchResults = async (searchParam) => {
        const response = await fetch(`http://localhost:4000/product/search/${searchParam}`);
        const data = await response.json();
        
        this.setState({
            searchList: data
        });
        // console.log(data);
        return data;
    }

    async getShoppingList() {
        this.setState({
            shoppingList: this.state.shoppingList
        });
    }

    addToShoppingList = async (id) => {
        let quantity = 1;
    
        const response = await fetch(`http://localhost:4000/product/${id}`);
        const data = await response.json();

        this.state.searchList.forEach(element => {
            if(element.id === id) {
                quantity = element[1] + 1;
            } else {
                quantity = 1;
            }
            return quantity
        });

        this.setState({
            shoppingList: [...this.state.shoppingList, data[0]]
        });

    }

    componentDidMount() {
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
            };
        });
        return redItems;
    };
    async getList(redItems) {
        let shoppingList = [];
        redItems.forEach(item => {
            shoppingList.push(item);
        });
        return shoppingList;
    }

    getItemInHand(inventoryList) {
        let inHand = [];
        inventoryList.forEach(item => {
            if(item.currentweight === 0) {
                inHand.push(item);
            };
        });
        return inHand;
    };

    async addItemsToGet() {
        const itemArray = [];
        await this.state.itemsToGet.forEach(element => {
            itemArray.push(element);
        });
        this.setState({
            itemsToGet: itemArray
        });
        // console.log(this.state.itemsToGet);
    };

    render() {
        return(
            <div className="dashboard-main">
                <DashboardLeft shoppingList={this.state.shoppingList} userId={this.state.currentUser} redItems={this.state.redItems} search={this.getSearchResults} searchList={this.state.searchList} addToShoppingList={this.addToShoppingList}/>
                <div className="dashboard-right">
                    <DashboardRight inventoryList={this.state.inventoryList} redItems={this.state.redItems} currentUser={this.state.currentUser} inHand={this.state.inHand} />
                </div>
            </div>
        );
    };
}

export default DashboardMain;