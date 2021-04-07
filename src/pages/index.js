import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import parseJoke from "../utils/parse-joke";
import githubLogo from "../github-logo.png";
import "typeface-roboto";

let initialRender = true;

const initialState = {
  jokeText: "",
  punchlineText: null,
  punchlineIsVisible: false,
};

export default function Page() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchDadJoke() {
      const { data } = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
          "User-Agent":
            "simple-dad-joke.now.sh (https://github.com/bmealhouse/simple-dad-joke)",
        },
      });

      setState({
        ...parseJoke(data.joke),
        punchlineIsVisible: false,
      });
    }

    if (initialRender) {
      fetchDadJoke();
      initialRender = false;
    }

    const clickHandler = (e) => {
      if (e.type === "keydown" && e.key !== " ") {
        return;
      }

      if (state.punchlineText === null || state.punchlineIsVisible) {
        setState(initialState);
        fetchDadJoke();
      } else {
        setState((prevState) => ({
          ...prevState,
          punchlineIsVisible: true,
        }));
      }
    };

    window.addEventListener("click", clickHandler);
    window.addEventListener("keydown", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("keydown", clickHandler);
    };
  }, [state]);

  return (
    <>
      <GlobalCss />
      <Container>
        <Main>
          <motion.p
            animate={{
              opacity: state.jokeText ? 1 : 0,
              y: state.jokeText ? 0 : -50,
            }}
            transition={{ duration: 0.5 }}
            jokeTextLength={state.jokeText.length}
          >
            {state.jokeText}{" "}
            {state.punchlineText && (
              <Punchline isVisibile={state.punchlineIsVisible}>
                {state.punchlineText}
              </Punchline>
            )}
          </motion.p>
        </Main>
      </Container>
      <Emoji>
        <span role="img" aria-label="face palm">
          🤦‍♂️
        </span>
      </Emoji>
      <GitHubLink href="https://github.com/bmealhouse/simple-dad-joke">
        <img src={githubLogo} alt="GitHub repository" />
      </GitHubLink>
    </>
  );
}

const GlobalCss = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    background-color: #2d2d2d;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  padding-right: 15vw;
  padding-left: 15vw;
  color: #fff;
  font-size: ${(props) => (props.jokeTextLength > 150 ? 4 : 4.5)}vmax;
  font-weight: 700;
  cursor: pointer;
`;

const Punchline = styled.span`
  background-color: rgba(
    255,
    255,
    255,
    ${(props) => (props.isVisibile ? 0 : 1)}
  );
`;

const Emoji = styled.div`
  position: fixed;
  font-size: 25vmax;
  line-height: 1;
  left: -75px;
  bottom: -25px;
  opacity: 0.1;
`;

const GitHubLink = styled.a`
  position: fixed;
  right: 7px;
  bottom: -25px;
  width: 75px;
  opacity: 0.5;
`;
