import styles from "../styles/Home.module.css";
import React from "react";
import { ChakraProvider, Box, Button, Image } from "@chakra-ui/react";
import logo from "../pages/images/interactions2.0.png";
import {
  Animator,
  Animation,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export default function Home() {
  const Spin = (cycle: number) =>
    ({
      in: {
        style: {
          transform: (p) => `rotate(${p * 360 * cycle}deg)`,
        },
      },
      out: {
        style: {
          transform: (p) => `rotate(${p * 360 * cycle}deg)`,
        },
      },
    } as Animation);
  return (
    <div className="background">
      <div className="background2">
        <div className="background3">
          <Box className="interactoins"></Box>
        </div>
        <Box
          bgColor="white"
          w="550px"
          h="200px"
          display="flex"
          flexDirection="row"
          paddingLeft="30px"
        >
          <Box
            borderRadius="24px"
            h="40px"
            fontSize="22px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="5px"
          >
            Start Designing
          </Box>
          <Box w="30px"></Box>
          <Box
            borderRadius="24px"
            h="40px"
            fontSize="22px"
            bgColor="gray"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="5px"
          >
            Learn More About IX2
          </Box>
        </Box>

        <Box className="zavsar" h="300px"></Box>
      </div>
      <Box bgColor="black" w="100%">
        <Box fontSize="100" color="pink">
          Before we dive into IX2,let's talk about how we got here.
        </Box>
        <Box paddingTop="30%">
          <h1 className="text1993">1993</h1>
          <text className="under_1993">
            Computer scientist Tim Berners-Lee had a stroke of genius:
          </text>
        </Box>

        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Spin(1))}>
              <h1 style={{ fontSize: 50, color: "white", opacity: 0.7 }}>
                Scrolling Down
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage>...</ScrollPage>
          <Box h="400px"></Box>

          <ScrollPage>
            <Animator animation={FadeUp}>
              <Box>
                <Animator animation={ZoomIn(0, 10)}>
                  <span style={{ color: "pink", fontWeight: "bolder" }}>
                    THE WORLD <br /> WIDE WEB
                  </span>
                </Animator>
              </Box>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </Box>
    </div>
  );
}
