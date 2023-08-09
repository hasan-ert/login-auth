import React from "react";

//theme
import theme from "./theme";

//packages
import styled from "styled-components";

const Button = styled.button`
    margin-bottom: ${theme.btn.marginBlock};
    color: ${(props) => {
        if (props.variant === "tertiary") return theme.colors.primary;
        else if (props.variant === "secondary") return theme.colors.blackText;
        else return theme.colors.whiteText;
    }};

    background-color: ${(props) => {
        if (props.variant === "tertiary") return "transparent";
        else if (props.variant === "secondary") return theme.colors.greyCont;
        else return theme.colors.primary;
    }};
    min-width: ${(props) => (props.width ? props.width : theme.btn.width)};
    min-height: ${(props) => (props.height ? props.height : theme.btn.height)};
    border: ${(props) =>
            props.border ? props.border : theme.btn.borderThickness}
        solid;
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : theme.btn.borderRadius};

    font-size: ${theme.btn.fontSize};
    font-weight: ${theme.btn.fontWeight};

    transition: 0.6s ease;

    &:hover {
        background-color: ${(props) => {
            if (props.variant === "tertiary") return "transparent";
            else if (props.variant === "secondary")
                return theme.colors.greyContDark;
            else return theme.colors.primaryDark;
        }};

        color: ${(props) => {
            if (props.variant === "tertiary") return theme.colors.primaryDark;
            else if (props.variant === "secondary")
                return theme.colors.blackText;
            else return theme.colors.whiteText;
        }};
    }

    &:focus {
        background-color: ${(props) => {
            if (props.variant === "tertiary") return "transparent";
            else if (props.variant === "secondary")
                return theme.colors.greyContDarker;
            else return theme.colors.primaryDarker;
        }};

        color: ${(props) => {
            if (props.variant === "tertiary") return theme.colors.primaryDarker;
            else if (props.variant === "secondary")
                return theme.colors.blackText;
            else return theme.colors.whiteText;
        }};
    }
`;

export { Button };
