import React, { useState } from "react";
import styled from "styled-components";
import { UilAngleRightB } from "@iconscout/react-unicons";
import theme from "../../themes/theme";

const SidebarWrapper = styled.div`
    width: ${(props) => (props.$isOpen ? "20%" : "0")};

    transition: width 0.3s ease-in-out;
`;

const SidebarContent = styled.div`
    position: relative;
    background-color: ${theme.colors.primary.normal};
    width: 100%;
    height: 100%;

    border-radius: 25px;
    border-top-right-radius: 0;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
const ToggleButton = styled.button`
    display: flex;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: ${(props) => (props.$isOpen ? "-30px" : "-1rem")};
    border: none;
    color: ${theme.colors.text.white};
    cursor: pointer;
    z-index: 3;
    background-color: ${theme.colors.primary.normal};
    &::before {
        position: absolute;
        content: "";
        background-color: transparent;
        height: 10px;
        width: 30px;
        top: 30px;
        left: 0;
        border-top-left-radius: 5px;
        box-shadow: ${(props) =>
            props.$isOpen
                ? "-8px -6px 0 0 " + theme.colors.primary.normal
                : "none"};
    }
`;

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarWrapper $isOpen={isOpen}>
            <SidebarContent>
                <ToggleButton onClick={toggleSidebar} $isOpen={isOpen}>
                    <UilAngleRightB
                        size={30}
                        style={{
                            rotate: isOpen ? "-180deg" : "0deg",
                            transition: "0.6s ease",
                        }}
                    />
                </ToggleButton>
                {/* Sidebar content */}
            </SidebarContent>
        </SidebarWrapper>
    );
}

export default Sidebar;
