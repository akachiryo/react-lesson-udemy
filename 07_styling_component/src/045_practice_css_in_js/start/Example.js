import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

const SecondButton = styled(FirstButton)`
color: white;
  background-color: red;
`;

const ThirdButton = styled(SecondButton)`
  background-color: ${({dark}) => dark? "black": "green"};
`;

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        <ul>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
      </p>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン1</SecondButton>
      <ThirdButton>ボタン1</ThirdButton>
      <ThirdButton dark>ボタン1</ThirdButton>
    </>
  );
};

export default Example;
