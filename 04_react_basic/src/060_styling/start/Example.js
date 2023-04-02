/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
import "./Example.css";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <ul>item-1</ul>
      <ul>item-2</ul>
      <ul>item-3</ul>
      <ul>item-4</ul>
      <ul>item-5</ul>
    </div>
  );
};

export default Example;
