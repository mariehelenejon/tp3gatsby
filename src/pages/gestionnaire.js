import React from "react"; 
import Header from "../components/header";
import Container from "../components/container";
import Tasks from "../components/tasks";

export default () => (
      <div  style={{ color: `purple` }}>
        <Header />
          <Container>
            <Tasks />
          </Container>
      </div>
)