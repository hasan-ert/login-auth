import styled from "styled-components";
import theme from "./theme";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { Row, Col } from "react-bootstrap";
const ErrorDiv = styled.div`
    color: ${theme.colors.primary};
    margin-block: 1rem;
    width: auto;
    border: 2px solid ${theme.colors.primaryDarker};
    border-radius: ${theme.inputbox.borderRadius};
    transition: 0.6s;
    display: flex;
    flex-direction: row;
    padding-block: 0.5rem;
`;

function Error(props) {
    return (
        <ErrorDiv>
            <Row style={{ width: "100%" }}>
                <Col xs={3}>
                    <UilExclamationTriangle
                        style={{ margin: "auto" }}
                        size="25"
                        color={theme.colors.primaryDarker}
                    />
                </Col>
                <Col xs={9}>{props.children}</Col>
            </Row>
        </ErrorDiv>
    );
}

export { Error };
