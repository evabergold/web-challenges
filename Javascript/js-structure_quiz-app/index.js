import { App } from "./components/App/App.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { Card } from "./components/Card/Card.js";
import { CardList } from "./components/CardList/CardList.js";
import { Form } from "./components/Form/Form.js";
import { handleFormSubmit } from "./components/Form/Form.js";
import { Header } from "./components/Header/Header.js";
import { cards } from "./components/Card/Card.js";





// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
