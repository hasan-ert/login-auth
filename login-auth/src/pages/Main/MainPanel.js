import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../ui-components/Sidebar/Sidebar";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import { DashboardRouteController } from "../../components/Routes/Routes";

const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 1rem;
`;

const MainContent = styled.div`
    flex: 1;
`;

const Header = styled.div`
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
`;

const MainPanel = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <Header>
                    <ProfileButton />
                </Header>
                <DashboardRouteController />
            </MainContent>
        </LayoutContainer>
    );
};

export default MainPanel;
