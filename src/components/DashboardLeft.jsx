import React from 'react';
import DashboardList from './DashboardList';
import DashboardSearchList from './DashboardSearchList';

function DashboardLeft() {
    return (
        <div className="dashboard-left">
            <DashboardList />
            <DashboardSearchList />
        </div>
    );
}

export default DashboardLeft;