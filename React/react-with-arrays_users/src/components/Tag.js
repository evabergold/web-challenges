import "./Tag.css";

export default function Tag({ tag }) {
  const isAdminClass = `tag ${tag === "admin" ? "tag--highlight" : ""}`;
  return <li className={isAdminClass}>{tag}</li>;
}
