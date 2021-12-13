import styled from 'styled-components';
import { Heading } from '../section/Section.styled';

export const RoadmapContainer = styled.div`
  margin-top: -80px;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${Heading} {
    font: normal normal bold 20px/25px Gilroy ☞;
  }
  .heading {
    font: normal normal bold 40px/49px Gilroy ☞;
  }
  @media screen and (max-width: 768px) {
    min-height: 100%;
    padding-bottom: 40px;
    margin-top: 0px;
  }
`;
export const Event = styled.div`
  border-top: 1px solid green;
  transform: translateY(10px);
  padding: 20px 0px;

  ul li {
    font: normal normal medium 16px/28px SF UI Text;
    color: var(--heading-color);

    list-style-type: disc;
    padding-bottom: 8px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export const Timeline = styled.div`
  width: 80%;
  height: auto;
  max-width: 900px;
  margin: 0px auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background: green;
    left: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TimelineUl = styled.ul`
  list-style: none;
`;
export const TimelineLi = styled.li`
  width: 50%;
  position: relative;
  &:last-child {
    margin-bottom: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    top: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(odd) {
    float: left;
    clear: right;
    ${Heading} {
      text-align: right;
      padding: 0px 20px;

      @media screen and (max-width: 768px) {
        text-align: left;
        padding: 0px 5px 0px 0px;
        word-wrap: break-word;
        font-size: 12px;
      }
    }
    ${Event} {
      padding-right: 20px;
    }
  }
  &:nth-child(odd)::after {
    right: -6px;
    top: 30px;
  }
  &:nth-child(even) {
    float: right;
    clear: left;
    ${Heading} {
      text-align: left;
      padding: 0px 20px;

      @media screen and (max-width: 768px) {
        text-align: left;
        padding: 0px 0px 0px 8px;
        word-wrap: break-word;
        font-size: 12px;
      }
    }
    ${Event} {
      padding-left: 30px;
    }
  }
  &:nth-child(even)::after {
    left: -5px;
    top: 30px;
  }
`;
export const TimelineContent = styled.div`
  padding-top: 30px;
`;
