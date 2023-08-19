import React from "react";
//context
import { useAuthContext } from "../../hooks/useAuthContext";

//ui components
import { CustomDropdown, DropdownItem } from "../../ui-components/Dropdown";

//icon
import { UilUserCircle } from "@iconscout/react-unicons";
export default function ProfileButton() {
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <CustomDropdown
            open={true}
            closeOnOutsideClick
            icon={<UilUserCircle size="32" />}
            text={"Hasanus"}
        >
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </CustomDropdown>
    );
}
