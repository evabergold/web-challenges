import { Image } from "./Image.js";
import logo from "../img/logo.jpg";

export function Logo({ href }) {
  return (
    <a href={href}>
      <Image src={logo} alt="logo" />
    </a>
  );
}
