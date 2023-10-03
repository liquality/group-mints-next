import Image from "next/image";
import { NextPage } from "next";
import { useWallet, useSigner } from "@thirdweb-dev/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Settings: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          Settings Page
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
