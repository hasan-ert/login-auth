import React from "react";
import { CustomDropdown } from "../../ui-components/Dropdown";
export default function ProfileButton() {
    return (
        <CustomDropdown
            open={true}
            closeOnOutsideClick
            items={[{ type: "button", callback: () => {}, text: "Hello" }]}
        ></CustomDropdown>
    );
}
