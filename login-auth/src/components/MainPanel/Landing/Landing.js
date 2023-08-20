import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { H1, H2, Text } from "../../../ui-components/Headings";

export default function Landing() {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <H1>Welcome to the StoryTeller AI</H1>
                </Col>
                <Col xs={12}>
                    <H2>This is a placeholder text</H2>
                </Col>
                <Col xs={12}>
                    <Text>
                        Do voluptate nisi quis non mollit nisi incididunt.
                        Officia mollit anim magna id laboris eiusmod ex amet
                        incididunt nulla tempor anim. Irure labore cillum Lorem
                        qui anim dolor aute amet nulla ad ipsum. Pariatur nisi
                        pariatur eu cillum fugiat veniam amet cillum id nulla
                        Lorem eu. Occaecat commodo anim qui elit id ex
                        reprehenderit non consequat esse tempor cillum mollit
                        nulla.
                    </Text>
                </Col>
            </Row>
        </Container>
    );
}
