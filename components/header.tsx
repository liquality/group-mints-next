import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import LogoIcon from "../public/images/logo.svg";
import WalletIcon from "../public/images/wallet-icon.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Header() {
  const address = useAddress();
  return (
    <Navbar
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={LogoIcon}
            alt=""
            height={30}
            width={30}
            className="d-inline-block align-top"
          />{" "}
          Group Mints
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <ConnectWallet
              btnTitle="Login"
              detailsBtn={() => {
                return (
                  <Image
                    src={WalletIcon}
                    alt=""
                    height={30}
                    width={30}
                  />
                );
              }}
            />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
