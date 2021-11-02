import React from "react";
import styled from "styled-components";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import media from "../../utility/Media";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";

const StyledUserContainer = styled.div`
  flex: 0 1 25%;
  .MuiPaper-root {
    margin: 10px;
    box-shadow: none;
  }
  .MuiCardMedia-img {
    border-radius: 22.5px;
  }
  .name {
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1rem;
    color: #1d1e2c;
    text-align: center;
  }
  .bio {
    color: #6b7280;
    font-size: 15px;
    line-height: 26.25px;
    text-align: center;
    text-transform: capitalize;
  }
  .MuiCardActions-root {
    align-items: center;
    margin-top: -20px;
    text-align: center;
    justify-content: center;
  }
  .MuiCardActions-root {
    padding: 0px;
    button {
      font-size: 20px;
      color: #0062af;
    }
  }
  ${media.mobile`
    flex:0 0 100%;
  `}
`;

const User = ({ user }) => {
  const { image, name, role, socialmedia } = user;
  return (
    <>
      <StyledUserContainer>
        <Card>
          <CardMedia component="img" alt={name} height="300" image={image} />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div" className="name">
              {name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" className="bio">
              {role}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {socialmedia.twitter && (
              <a href={socialmedia.twitter}>
                <IconButton aria-label="Twitter">
                  <FiTwitter />
                </IconButton>
              </a>
            )}
            {socialmedia.github && (
              <a href={socialmedia.github}>
                <IconButton aria-label="Github">
                  <FiGithub />
                </IconButton>
              </a>
            )}
            {socialmedia.linkedln && (
              <a href={socialmedia.linkedln}>
                <IconButton aria-label="Linkedin">
                  <FiLinkedin />
                </IconButton>
              </a>
            )}
          </CardActions>
        </Card>
      </StyledUserContainer>
    </>
  );
};

export default User;
