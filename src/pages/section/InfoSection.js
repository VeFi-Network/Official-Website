import React from 'react';
import { FiDownload } from 'react-icons/fi';

import Image from '../../components/Image';
import {
  Heading,
  InfoColumn,
  InfoRow,
  InfoSec,
  InfoTextWrapper,
  InfoHeading,
  InfoDescription,
  Subheading,
} from '../../styles/section/Section.styled';
import { Button, Container } from '../../utility/GlobalStyle';

const InfoSection = ({ AboutUs }) => {
  return (
    <>
      <InfoSec id={AboutUs.id}>
        <Container>
          <Heading size="sm" bold>
            {AboutUs?.title}
          </Heading>
          <InfoRow>
            <InfoColumn>
              <InfoTextWrapper>
                <InfoHeading>
                  <Heading bold>{AboutUs?.subtitle}</Heading>
                </InfoHeading>
                <InfoDescription>
                  <Subheading>{AboutUs?.description}</Subheading>
                </InfoDescription>
                <Button bgColor="var(--bg-blue)" border fontColor="#fff">
                  <FiDownload /> &nbsp;
                  {AboutUs?.buttonText}
                </Button>
              </InfoTextWrapper>
            </InfoColumn>
            <InfoColumn>
              <Image img={AboutUs.img} alt={AboutUs?.title} />
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
