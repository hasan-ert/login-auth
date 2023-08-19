import styled from "styled-components";
import theme from "../../themes/theme";
import { Button } from "../Button";
import { devices } from "../../themes/media";

const SidebarInside = styled.div`
    width: 100%;
    flex-direction: column;
    padding-inline: 2rem;
    padding-block: 1rem;
    gap: 1rem;
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

const SidebarButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.text.white};
    width: 100%;
    height: 60px;
    color: ${theme.colors.text.grey};
    text-decoration: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition-delay: 2s;
    transition: 0.6s ease;

    &:hover {
        background-color: ${(props) => {
            if (props.variant === "tertiary") return "transparent";
            else if (props.variant === "secondary")
                return theme.colors.container.dark;
            else return theme.colors.primary.dark;
        }};

        color: ${(props) => {
            if (props.variant === "tertiary") return theme.colors.primary.dark;
            else if (props.variant === "secondary")
                return theme.colors.text.black;
            else return theme.colors.text.white;
        }};
    }

    &:focus {
        background-color: ${(props) => {
            if (props.variant === "tertiary") return "transparent";
            else if (props.variant === "secondary")
                return theme.colors.container.dark;
            else return theme.colors.primary.darker;
        }};

        color: ${(props) => {
            if (props.variant === "tertiary")
                return theme.colors.primary.darker;
            else if (props.variant === "secondary")
                return theme.colors.text.black;
            else return theme.colors.text.white;
        }};
    }
`;

const SidebarWrapper = styled.div`
    width: ${(props) => (props.$isOpen ? "100%" : "0")};
    transition: width 0.3s ease-in-out;

    ${SidebarInside} {
        width: ${(props) => (props.$isOpen ? "100%" : "0")};
        display: ${(props) => (props.$isOpen ? "flex" : "none")};
    }
`;

export {
    SidebarButton,
    SidebarContent,
    SidebarWrapper,
    ToggleButton,
    SidebarInside,
};
