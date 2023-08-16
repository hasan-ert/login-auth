import styled from "styled-components";
import theme from "../themes/theme";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { Row, Col } from "react-bootstrap";
const ErrorDiv = styled.div`
    color: ${theme.colors.primary.normal};
    margin-block: 1rem;
    width: 100%;
    border: 2px solid ${theme.colors.primary.darker};
    border-radius: ${theme.inputbox.borderRadius};
    transition: 0.6s;
    display: flex;
    flex-direction: row;
    padding-block: 0.5rem;
`;

function Error(props) {
    return (
        <ErrorDiv>
            <Row style={{ width: "-webkit-fill-available" }}>
                <Col xs={12}>
                    <UilExclamationTriangle
                        style={{ margin: "auto" }}
                        size="25"
                        color={theme.colors.primary.darker}
                    />
                </Col>
                <Col xs={12}>{props.children}</Col>
            </Row>
        </ErrorDiv>
    );
}

export { Error };
