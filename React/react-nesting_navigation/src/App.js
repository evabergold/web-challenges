import "./styles.css";
import { Header } from "./components/Header.js";
import { Navigation } from "./components/Navigation.js";
import { Link } from "./components/Link.js";
import { Avatar } from "./components/Avatar.js";
import { Logo } from "./components/Logo.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo href="#" />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
