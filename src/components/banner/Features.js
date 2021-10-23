import { Button, Container } from "@material-ui/core";
import React from "react";
import { Left, Right } from "../styles/Position.styled";
import { StyledHeroBanner } from "./HeroBanner.styled";
import {
  AppMockUp,
  Box,
  FeaturedRightImage,
  StyledFeatureRight,
  StyledFeatures,
} from "./Features.styled";
import { BiCheckCircle } from "react-icons/bi";
import map from "../../assets/images/map.png";
import app_1 from "../../assets/images/app_1.svg";
import { H1, P } from "../Typography";
import { Paper } from "../Grid";
const Features = () => {
  return (
    <StyledHeroBanner>
      <Container>
        <StyledFeatures>
          <Left size="1">
            <H1>
              VEFI <span>Wallet</span>
            </H1>
            <Box>
              <P>
                VEFI NETWORK native wallet, VEFI ensure that this wallet is
                flexible, secure,easy and simple t use whereby enabling users to
                store, send,spend,receive,swap and exchange their crypto assets
                instantly.
              </P>
            </Box>
            <Paper>
              <div>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Store Crypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Send Cypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Spend Cypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Swap Cypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Receive Cypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Exchange Cypto
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BiCheckCircle />}
                  className="button"
                >
                  Stake Cypto
                </Button>
              </div>
            </Paper>
          </Left>
          <Right size="0.4">
            <StyledFeatureRight>
              <FeaturedRightImage>
                <img src={map} alt="app" />
              </FeaturedRightImage>
              <AppMockUp>
                <img src={app_1} alt="app" />
              </AppMockUp>
            </StyledFeatureRight>
          </Right>
        </StyledFeatures>
      </Container>
    </StyledHeroBanner>
  );
};

export default Features;
