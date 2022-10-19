import styled from "styled-components";

export const Heading = styled.h1`
  color: white;
  margin-bottom: 70px;
`;

export const DrumsContainer = styled.div`
  height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DrumsWrapper = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;
/* ====================================================================== */

export const DrumWrapper = styled.button`
  box-sizing: border-box;
  position: relative;
  width: 175px;
  height: 175px;
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  margin-bottom: 20px;
`;

export const DrumInitial = styled.div`
  position: absolute;
  width: 17px;
  height: 28px;
  top: 8px;
  left: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-transform: capitalize;
`;

export const DrumEdit = styled.div`
  position: absolute;
  width: 49px;
  height: 49px;
  right: 0;
  bottom: 0px;
  background: #ffffff;
  border-radius: 16px;
`;

export const Icon1 = styled.span`
  position: absolute;
  top: 30%;
  left: 17px;
`;

export const Icon2 = styled.span`
  position: absolute;
  top: 30%;
  left: 20px;
`;

// ====================================================================

export const AddDrumWrapper = styled.button`
  width: 176px;
  height: 176px;
  margin-bottom: 20px;

  position: relative;
  background-color: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 11px;
`;

export const PlusIcon1 = styled.span`
  position: absolute;
  width: 8px;
  height: 45.26px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 42px;
`;
export const PlusIcon2 = styled.span`
  position: absolute;
  width: 8px;
  height: 45.26px;
  left: 50%;
  top: 50%;
  transform: translate(-288%, -22%);
  border-radius: 42px;
`;

