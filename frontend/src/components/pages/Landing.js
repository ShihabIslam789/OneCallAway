import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Btn,
  Container,
  Divider,
  FlexCentered,
  StyledLink,
  Title
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
  Stars,
  Subtitle
} from "./styles/Landing.styled";

const Landing = () => {
  const { isAuthenticated } = useSelector(state => state.user);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const navItems = [
    {
      title: "features",
      path: ""
    },
    {
      title: "get chrome extension",
      path: "/"
    },
    {
      title: "sign in",
      path: "/signin"
    }
  ];

  const genFeature = feature => {
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
            <Title>One Call Away</Title>
            <Subtitle>
              Connect with friends and families anytime, anywhere
            </Subtitle>
            <StyledLink to="/signup">
              <Btn
                hoverColor="rgba(237, 66, 100, 1)"
                br="1.8rem"
                fs="1.6rem"
                m="6rem 0 0 0"
                bgColor="rgba(237, 66, 100, 0.9)"
                p="0.8rem 1.5rem"
                boxShadowColor="#fff">
                Sign Up
              </Btn>
            </StyledLink>
            <StyledLink to="/voice_call">
              <Btn
                hoverColor="rgba(50, 50, 160, 1)"
                br="1.8rem"
                fs="1.6rem"
                m="6rem 0 0 0"
                bgColor="rgba(50, 50, 160, 0.9)"
                p=".9rem 1.5rem"
                boxShadowColor="#fff">
                Make a call
              </Btn>
            </StyledLink>
            <StyledLink to="/chat">
              <Btn
                hoverColor="rgba(50, 50, 160, 1)"
                br="1.8rem"
                fs="1.6rem"
                m="6rem 0 0 0"
                bgColor="rgba(50, 50, 160, 0.9)"
                p=".9rem 1.5rem"
                boxShadowColor="#fff">
                Chat with friends
              </Btn>
            </StyledLink>
          </FlexCentered>
        </LandingInner>
      </LandingImage>
      <Divider />
      <Section bgColor="#fffde7">
        <FlexCentered>
          <Title fs="2.5rem" m="0 0 1rem 0">
            Features
          </Title>
          <FeatureList name="features">
            {genFeature("Invite friends with a simple link")}
            {genFeature("Chat with anyone - anywhere")}
            {genFeature("All for FREE!")}
          </FeatureList>
        </FlexCentered>
      </Section>
      <Divider />

      <Section bgColor="#dcedc8" mb="1.1rem">
        <Title fs="2.5rem" m="1rem 0">
          What our users are saying...
        </Title>
        <FlexCentered>
          <ReviewSection>
            <FlexCentered>
              <Stars>⭐ ⭐ ⭐ ⭐ ⭐</Stars>
              <Review>
                This site makes it crazy easy for me to hop in a call with my
                bros during a game. What a revolutionary product!
              </Review>
              <Reviewer>- John Doe</Reviewer>
            </FlexCentered>
          </ReviewSection>
        </FlexCentered>
      </Section>
    </Container>
  );
};

export default Landing;