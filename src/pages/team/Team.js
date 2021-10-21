import { Container } from "@material-ui/core";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import AppBar from "../../components/AppBar";
import { Space } from "../../components/Divider";
import { Section } from "../../components/Grid";
const Team = () => {
  return (
    <Section>
      <Container maxWidth="md">
        <Space />
        <AppBar heading="Our Team" icon={<AiFillCaretDown />} />
        <Space />
      </Container>
      <Space />
      <Space />
      {/*<User img="https://images.unsplash.com/photo-1634745976689-41875b3a3155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
      <User img="https://images.unsplash.com/photo-1634745976689-41875b3a3155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
      <User img="https://images.unsplash.com/photo-1634745976689-41875b3a3155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
      <User img="https://images.unsplash.com/photo-1634745976689-41875b3a3155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
      <User img="https://images.unsplash.com/photo-1634745976689-41875b3a3155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
 */}
    </Section>
  );
};

export default Team;
