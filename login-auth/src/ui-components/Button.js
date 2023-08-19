import React from "react";

//theme
import theme from "../themes/theme";

//packages
import styled from "styled-components";

const Button = styled.button`
    margin-bottom: ${theme.btn.marginBlock};
    color: ${(props) => {
        if (props.variant === "tertiary") return theme.colors.primary.normal;
        else if (props.variant === "secondary") return theme.colors.text.black;
        else return theme.colors.text.white;
    }};

    background-color: ${(props) => {
        if (props.variant === "tertiary") return "transparent";
        else if (props.variant === "secondary")
            return theme.colors.container.normal;
        else return theme.colors.primary.normal;
    }};
    width: ${(props) => (props.width ? props.width : theme.btn.width)};
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

export { Button };
