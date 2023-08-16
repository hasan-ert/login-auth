import React from "react";

//theme
import theme from "../themes/theme";

//packages
import styled from "styled-components";

const InputBox = styled.input`
    margin-bottom: ${theme.inputbox.marginBlock};
    color: ${theme.colors.text.black};

    background-color: ${theme.colors.container.normal};
    width: ${(props) => (props.width ? props.width : theme.inputbox?.width)};
    height: ${(props) =>
        props.height ? props.height : theme.inputbox?.height};
    border: ${(props) =>
            props.border ? props.border : theme.inputbox?.borderThickness}
        solid;
    border-color: ${theme.colors.container.normal};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : theme.inputbox?.borderRadius};
    transition: 0.6s ease;
    font-size: ${theme.inputbox.fontSize};
    font-weight: ${theme.inputbox.fontWeight};
    outline: none;
    &:hover {
        background-color: ${theme.colors.container.dark};
    }

    &:focus {
        outline: none;
        border: 2px solid;
        border-color: ${theme.colors.text.grey};
    }
`;

export { InputBox };
