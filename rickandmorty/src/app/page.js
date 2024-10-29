import List from "./components/List/List";
import './page.css'
export default function Home() {
  return (
    <>
    <div className="container-main">
      <h1>Rick and Morty</h1>
      <List/>
    </div>
    </>
  );
}
