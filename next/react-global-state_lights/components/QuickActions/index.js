import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onToggleAllLightsOn,
  onToggleAllLightsOff,
  allLightsOn,
  allLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          {
            onToggleAllLightsOff();
          }
          console.log("Turn all lights off");
        }}
        disabled={allLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          {
            onToggleAllLightsOn();
          }
          console.log("Turn all lights on");
        }}
        disabled={allLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
