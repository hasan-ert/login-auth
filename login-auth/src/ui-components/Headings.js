import { styled } from "styled-components";

import theme from "./theme";

const H1 = styled.h1`
    font-size: ${theme.fonts.h1};
    text-align: start;
`;
const H2 = styled.h2`
    font-size: ${theme.fonts.h2};
    text-align: start;
`;
const H3 = styled.h3`
    font-size: ${theme.fonts.h3};
    text-align: start;
`;
const Text = styled.p`
    font-size: ${theme.fonts.p};
    text-align: justify;
`;

export { H1, H2, H3, Text };
