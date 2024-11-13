import React from "react";
import styled from "styled-components";

type Props = {
  scale: number;
};

const PianoSimpleWrapper = styled.div<Props>`
  --width: 369px;
  --height: 276px;
  --scale: ${(props) => props.scale};
  width: calc(var(--width) * var(--scale));
  height: calc(var(--height) * var(--scale));
`;

export default PianoSimpleWrapper;
