import styled from "styled-components";
import "./App.css";
import Account from "./components/account";

const Header = styled.h1`
  padding: 32px;
  text-align: center;
  color: var(--color);
`;

function App() {
  return (
    <div className="App">
      <Header>Dashboard</Header>
      <Account />
    </div>
  );
}

export default App;
