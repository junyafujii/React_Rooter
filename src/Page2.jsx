import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>page2</h1>
      <Link to="/page2/999">URL Parameter Page2</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter Page2</Link>
    </div>
  );
};
