import { Button, Container } from "@material-ui/core";
import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { ContactUsContainer, InputField, StyledContactUs } from "./ContactUs.styled";
const ContactUs = () => {
  return (
    <StyledContactUs>
      <Container maxWidth="lg">
        <ContactUsContainer>
          <h1>Get in touch!</h1>
          <InputField>
            <FaRegUser />
            <Input placeholder="Name" type="text" />
          </InputField>
          <InputField>
            <BiEnvelope />
            <Input placeholder="Email" type="email" />
          </InputField>
          <InputField>
            <TextArea placeholder="Message" cols="100" rows="13" />
          </InputField>
          <Button>Send</Button>
        </ContactUsContainer>
      </Container>
    </StyledContactUs>
  );
};

export default ContactUs;
