import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../themes/theme";
import { CustomDropdown } from "../Dropdown";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "react-bootstrap";
import ProfileButton from "../../components/ProfileButton/ProfileButton";

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

const Panel = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <Header>
                    <ProfileButton></ProfileButton>
                </Header>
            </MainContent>
        </LayoutContainer>
    );
};

export default Panel;
