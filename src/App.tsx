// src/App.tsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavList } from "./components/ui/NavList";
import { UnorderedList } from "./components/ui/UnorderedList";
import { Link } from "./components/ui/Link";
import { TriviaCard } from "./components/TriviaCard";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const [activeUnordered, setActiveUnordered] = useState(0);
  const navItems = ["Home", "About", "Services", "Contact"];
  const unorderedItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const repoUrl = "https://github.com/TortoiseWolfe/react-trivia";

  return (
    <>
      {/* Render TriviaCard at the top */}
      <TriviaCard />
      {/* Existing demo content */}
      <div className="bg-copper dark:bg-copper-dark p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-special steampunk-gradient">
          Steampunk Vite App
        </h1>
        <p className="mt-4 text-gold dark:text-gold-dark">
          Using Arbutus Slab → <span className="font-arbutus">Hello</span>
        </p>
        <p className="mt-4 text-bronze dark:text-bronze-dark">
          Using Cinzel → <span className="font-cinzel">Classical vibes</span>
        </p>
        {/* Render NavList with active item highlighting */}
        <NavList items={navItems} activeIndex={activeNav} onItemClick={(i) => setActiveNav(i)} />
        {/* Render UnorderedList with selected item highlighting */}
        <UnorderedList items={unorderedItems} activeIndex={activeUnordered} onItemClick={(i) => setActiveUnordered(i)} />
        <div className="mt-4">
          <Link href={repoUrl}>View Repository on GitHub</Link>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
