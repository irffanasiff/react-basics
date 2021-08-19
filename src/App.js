// import PortalDemo from "./Components.js/portals/PortalDemo";
// import FocusInput from "./Components.js/refs/FocusInput";
// import FRParentInput from "./Components.js/refs/FRParentInput";
//import RefsDemo from "./Components.js/refs/RefsDemo";
//import ParentComponent from "./Components.js/memo/ParentComponent";
import ErrorBoundary from "./Components.js/errorBoundaries/ErrorBoundary";
import Hero from "./Components.js/errorBoundaries/Hero";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
