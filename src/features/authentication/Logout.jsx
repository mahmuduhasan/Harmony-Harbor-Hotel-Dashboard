import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const StyledLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <StyledLogout>
          <HiArrowRightOnRectangle /> <span>Logout</span>
        </StyledLogout>
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
}

export default Logout;
