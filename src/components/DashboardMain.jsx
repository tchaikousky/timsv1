import React, { Component } from 'react';
import DashboardList from './DashboardList';
import DashboardInventory from './DashboardInventory';
import DashboardRedItems from './DashboardRedItems';
import DashboardGreenItems from './DashboardGreenItems';

class DashboardMain extends Component {
    render() {
        return(
            <div className="dashboard-main">
                <DashboardList />
                <div className="dashboard-right">
                    <DashboardInventory />
                    <DashboardRedItems />
                    <DashboardGreenItems />
                </div>
            </div>
        );
    };
}

export default DashboardMain;