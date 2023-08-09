import styled from "styled-components";
import theme from "../../ui-components/theme";

const LogForm = styled.form`
    display: flex;
    justify-content: center;
    border-radius: 20px;
    width: 100%;
    min-height: 500px;

    & > .row {
        border-radius: inherit;
        background-color: ${theme.colors.greyBg};
        padding: 1rem;
        justifycontent: "center";
        width: 400px;
        border: 3px solid;
        border-color: ${theme.colors.primaryLight};
    }
    & label {
        display: flex;
        margin-right: auto;
        font-weight: 600;
    }
`;

export { LogForm };
