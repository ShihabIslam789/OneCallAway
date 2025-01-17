import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Btn,
  Container,
  FlexCentered,
  StyledLink,
  Title,
  FlexCenteredBut
} from "../../styles/General.styled";
import Navbar from "../general/Navbar";
import {
  Feature,
  FeatureList,
  Icon,
  LandingImage,
  LandingInner,
  Review,
  Reviewer,
  ReviewSection,
  Section,
  Section2,
  Stars,
  Subtitle,
} from "./styles/Landing.styled";

const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const navItems = [
    {
      title: "Features",
      path: "",
    },
    {
      title: "Get Chrome Extension",
      path: "/",
    },
    {
      title: "Sign In",
      path: "/signin",
    },
  ];

  const genFeature = (feature) => {
    return (
      <Feature>
        <Icon />
        {feature}
      </Feature>
    );
  };
  return (
    <Container mh="100vh">
      <Navbar navItems={navItems} />
      <LandingImage>
        <LandingInner>
          <FlexCentered>
            <Title c="#00ADB5" fs="10rem">
              One Call Away
            </Title>
            <br></br>
            <br></br>
            <Subtitle>
              Connect with friends and families efficiently: Anytime | Anywhere
            </Subtitle>
            <br></br>
            <br></br>
            <StyledLink to="/signup">
              <Btn
                hoverColor="#00ADB5"
                br="2rem"
                fs="3rem"
                m="2rem"
                bgColor="#00ADB5"
                p="1rem 2rem"
                boxShadowColor="#EEEEEE"
              >
                Sign Up
              </Btn>
            </StyledLink>
          </FlexCentered>
        </LandingInner>
      </LandingImage>
      <Container bgColor="#AAD8D3" c="white" h="20rem" p="5rem 0rem 0rem 0rem">
        <Section2>
          <FlexCenteredBut>
            <StyledLink to="/voice_call">
              <Btn
                hoverColor="#00ADB5"
                br="2rem"
                fs="3rem"
                bgColor="#AAD8D3"
                p="2rem 3rem"
                boxShadowColor="#EEEEEE"
                border="solid"
                m="1.3rem"
                c="#00ADB5"
              >
                Join a Call
              </Btn>
            </StyledLink>
            <a href = "https://chat-app-63eec.web.app/">
              <Btn
                hoverColor="#00ADB5"
                br="2rem"
                fs="3rem"
                bgColor="#AAD8D3"
                p="2rem 3rem"
                boxShadowColor="#EEEEEE"
                border="solid"
                m="1.3rem"
                c="#00ADB5"
              >
                Join a Chat Room
              </Btn>
            </a>
          </FlexCenteredBut>
        </Section2>
      </Container>
      <Section bgColor="#AAD8D3">
        <FlexCentered bgColor="#00ADB5" w="30%" ml="35%" br="6rem" mw="396px">
          <Title c="#393E46" fs="3rem" m="0 0 1rem 0">
            Features
          </Title>
          <FeatureList name="Features">
            {genFeature("Invite friends with a simple link")}
            {genFeature("Chat with anyone - anywhere")}
            {genFeature("All for FREE!")}
          </FeatureList>
        </FlexCentered>
      </Section>

      <Section bgColor="#AAD8D3">
        <ReviewSection>
          <FlexCentered>
            <Title fs="2rem" m="1rem 0">
              What our users are saying...
            </Title>
            <Stars>
              <span role="img" aria-label="star">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </span>
            </Stars>
            <Review>
              This site makes it crazy easy for me to hop in a call with my bros
              during a game. What a revolutionary product!
            </Review>
            <Reviewer>- John Doe</Reviewer>
          </FlexCentered>
        </ReviewSection>
      </Section>
    </Container>
  );
};

export default Landing;
