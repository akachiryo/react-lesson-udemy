import { useState } from "react";
import styled from "styled-components"

console.dir(styled);
const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({isSelected}) => isSelected? "pink": ""};
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  :hover {
    color: red;
  }
  @media (max-width: 600px) {
    opacity: 0.7;
  }

  span {
    color: blue;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
    <StyledButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
    <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>ボタン</span>ボタン</OrangeButton>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
