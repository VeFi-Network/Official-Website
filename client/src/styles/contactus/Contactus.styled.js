import styled from 'styled-components';

export const TopLine = styled.div`
  padding: 15px 0px;
  text-transform: uppercase;
`;
export const SocialIconContainer = styled.div`
  margin-left: 40px;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;
export const SocialIcon = styled.a`
  margin-right: 10px;
`;
export const Icon = styled.img`
  margin-bottom: 5px;
  margin-right: 20px;
  width: 200px;
  height: 80px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 90px;
    height: 50px;
    margin-right: 0px;
  }
`;
