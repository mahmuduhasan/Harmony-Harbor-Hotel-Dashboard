import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 26rem;
  height: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 7px;
  text-align: center;
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      © {year} Harmony Harbor Hotel. All rights reserved.
    </StyledFooter>
  );
}

export default Footer;
