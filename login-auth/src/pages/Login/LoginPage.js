import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/Login/Form";

import { styled } from "styled-components";
import theme from "../../ui-components/theme";
import { H1, H2, Text } from "../../ui-components/Headings";

const FormWrapper = styled.div`
    padding-block: 3rem;
`;
const TextWrapper = styled.div`
    padding-block: 3rem;
`;

const ContentRow = styled(Row)`
    display: flex;

    @media only screen and (max-width: 991px) {
        flex-direction: column-reverse;
    }
`;
function LoginPage() {
    return (
        <Container fluid>
            <Row
                style={{
                    height: "200px",
                    backgroundColor: theme.colors.primaryDarker,
                }}
            ></Row>

            <ContentRow style={{ position: "relative" }}>
                <Col xs={12} md={1}></Col>
                <Col xs={12} md={5}>
                    <TextWrapper>
                        <H1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </H1>
                        <H2>
                            Aenean vel elit dignissim, sollicitudin odio non,
                            porta magna. Maecenas quis laoreet ligula. Proin
                            consequat tortor et mi tincidunt posuere.
                        </H2>
                        <Text>
                            Sed lacus sem, dignissim et erat non, accumsan
                            venenatis magna. Aenean tempus pellentesque metus id
                            rutrum. Maecenas vitae quam cursus, tincidunt leo
                            id, suscipit augue. Nam tempus erat et ante suscipit
                            dignissim. Cras dapibus libero in ante placerat
                            mattis vitae at enim. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Etiam vehicula turpis
                            purus, molestie tempus quam scelerisque vitae. Morbi
                            dignissim, mi non suscipit vulputate, erat augue
                            interdum mauris, in imperdiet tortor justo sit amet
                            lectus. Integer non tempus mauris. Pellentesque
                            sodales, magna vitae rhoncus vulputate, ante nisl
                            pretium nisi, in iaculis tellus ante nec urna. Fusce
                            at pulvinar dui. Sed at dictum turpis. Nam ac
                            ultrices mauris, in dapibus odio.
                        </Text>
                    </TextWrapper>
                </Col>
                <Col xs={12} md={4}>
                    <FormWrapper>
                        <LoginForm />
                    </FormWrapper>
                </Col>
            </ContentRow>
        </Container>
    );
}

export default LoginPage;
