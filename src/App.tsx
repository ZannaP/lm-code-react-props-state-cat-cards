import { catData } from "./data/catData";
import { useState } from "react";
import "./App.css";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

function App(): JSX.Element {
  const [cats, setCats] = useState<Cat[]>(catData);
  const catCount = cats.length;

  return (
    <>
      <Navbar />
      <Header total={catCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
