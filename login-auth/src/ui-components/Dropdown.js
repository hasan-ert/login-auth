import styled from "styled-components";
import theme from "../themes/theme";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const DropdownItem = styled(Button)`
    height: 40px;
    background-color: ${theme.colors.text.white};
    border: none;
    display: flex;
    border-radius: 0;
    color: ${theme.colors.primary.light};
    &:hover {
        background-color: ${theme.colors.primary.light};
    }
    &:first-child:active {
        background-color: ${theme.colors.primary.lighter};
    }
    &:active {
        background-color: ${theme.colors.primary.lighter};
    }
    &:focus {
        background-color: ${theme.colors.primary.lighter};
        color: ${theme.colors.text.white};
    }
    &:focus-visible {
        background-color: ${theme.colors.primary.lighter};
        box-shadow: inherit;
        color: ${theme.colors.text.white};
    }
    &:not(.btn-check) + .btn:active {
        background-color: ${theme.colors.primary.lighter};
    }
`;

const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    transition: 0.8s ease;
    background-color: transparent;
`;

const DropdownToggle = styled(Button)`
    width: 100%;
    min-height: inherit;

    border: none;
    border-radius: inherit;
    background-color: inherit;
    transition: 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    &:hover {
        background-color: ${theme.colors.primary.light};
        color: ${theme.colors.text.white};
    }
    &:first-child:active {
        background-color: ${theme.colors.primary.normal};
    }
    &:focus-visible {
        background-color: ${theme.colors.primary.normal};
        box-shadow: 0 0 0 0.25rem ${theme.colors.primary.dark};
    }
`;

const DropdownWrapper = styled.div`
    width: ${({ width }) => (width ? width : "150px")};

    display: flex;
    flex-direction: column;
    /* Adjust as needed */

    min-height: ${({ height }) => (height ? height : " 50px;")};
    border-color: ${(props) =>
        props.$open ? theme.colors.primary.lighter : theme.colors.text.white};
    border-radius: 15px;
    background-color: ${(props) =>
        props.$open ? theme.colors.primary.light : theme.colors.text.white};
    transition: 0.6s ease;

    ${DropdownToggle} {
        color: ${(props) =>
            props.$open ? theme.colors.text.white : theme.colors.primary.light};
        &:hover {
            color: ${theme.colors.text.white};
        }
    }
    ${DropdownMenu} {
        max-height: ${(props) => (props.$open ? "500px" : "0px")};
        overflow: ${(props) => (props.$open ? "auto" : "hidden")};
        &::-webkit-scrollbar {
            display: none;
        }

        border-radius: inherit;
        /*hide scrollbar in dropdown*/
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

function CustomDropdown({
    isOpen,
    handleOpen,
    variant,
    closeOnOutsideClick,
    items = [],
    ...rest
}) {
    const [open, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const ref = useRef();

    useEffect(() => {
        if (closeOnOutsideClick)
            window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (ref.current)
            if (!ref.current.contains(e.target)) {
                closeDropdown();
            }
    };

    const closeDropdown = handleOpen
        ? () => {
              handleOpen(false);
          }
        : () => {
              setIsOpen(false);
          };

    const toggleDropdown = handleOpen
        ? () => {
              handleOpen(!open);
          }
        : () => {
              setIsOpen(!open);
          };

    const itemGenerator = () => {
        if (items === undefined || items.length === 0) return <></>;
        else {
            return items.map((item, ind) => {
                if (item.type === "link")
                    return (
                        <DropdownItem key={ind} as={Link} to={item?.href}>
                            {item?.text}
                        </DropdownItem>
                    );
                if (item.type == "button")
                    return (
                        <DropdownItem key={ind} onClick={item?.callback}>
                            {item?.text}
                        </DropdownItem>
                    );
            });
        }
    };

    return (
        <DropdownWrapper $open={open} {...rest} ref={ref}>
            <DropdownToggle onClick={toggleDropdown}>Hasanus</DropdownToggle>
            <DropdownMenu>{itemGenerator()}</DropdownMenu>
        </DropdownWrapper>
    );
}

export { CustomDropdown, DropdownItem, DropdownMenu, DropdownToggle };
