import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChessCard } from "./components/ChessCard";
import styled from "styled-components";

export interface AppProps {}

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import { useSpring, animated as a } from "react-spring";

const AnimatedChessCard = styled(a.div)`
  position: absolute;
  max-width: 700px;
  max-height: 500px;
  width: 100%;
  cursor: pointer;
  will-change: transform, opacity;
`;

const App: React.SFC<AppProps> = () => {
  const [flipped, set] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 8, tension: 500, friction: 80 },
  });
  return (
    <Container onClick={() => set((state) => !state)}>
      <AnimatedChessCard
        style={{
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform,
        }}
      >
        <ChessCard username="ovidubs" />
      </AnimatedChessCard>
      <AnimatedChessCard
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <ChessCard username="Hikaru" />
      </AnimatedChessCard>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
