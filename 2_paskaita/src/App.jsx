import Welcome from "./components/Welcome";
import WelcomeClass from "./components/WelcomeClass";

const App = () => {
  return (
    <div>
      Hello world
      <Welcome name="Rokas" surname="Rokaitis" />
      <WelcomeClass name="Tomas" />
    </div>
  );
};

export default App;
