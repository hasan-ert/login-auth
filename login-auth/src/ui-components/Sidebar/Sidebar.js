import React, { useState } from "react";

import { Col, Row } from "react-bootstrap";
import {
    SidebarButton,
    SidebarContent,
    SidebarInside,
    SidebarWrapper,
    ToggleButton,
} from "./SidebarComps";
import { Text } from "../Headings";

//icons
import { UilAngleRightB } from "@iconscout/react-unicons";
import { UilVideo } from "@iconscout/react-unicons";
import { UilImages } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const sidebarItems = [
    {
        icon: <UilVideo size={24} />,
        text: `Create Video`,
        link: "/create-video",
    },
    { icon: <UilImages size={24} />, text: `Media`, link: "/media" },
];

const generateButtons = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr.map((item, ind) => {
            return (
                <SidebarButton key={ind} as={Link} to={item.link}>
                    <Row>
                        <Col xs={4}>{item.icon}</Col>
                        <Col xs={8}>
                            <Text
                                style={{
                                    marginBottom: 0,
                                }}
                            >
                                {item.text}
                            </Text>
                        </Col>
                    </Row>
                </SidebarButton>
            );
        });
    }
};

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

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

                <SidebarInside>
                    <Row>
                        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" />
                    </Row>
                    <Row>{generateButtons(sidebarItems)}</Row>
                </SidebarInside>
            </SidebarContent>
        </SidebarWrapper>
    );
}

export default Sidebar;
