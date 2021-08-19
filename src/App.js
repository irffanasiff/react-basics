// import PortalDemo from "./Components.js/portals/PortalDemo";
// import FocusInput from "./Components.js/refs/FocusInput";
// import FRParentInput from "./Components.js/refs/FRParentInput";
//import RefsDemo from "./Components.js/refs/RefsDemo";
//import ParentComponent from "./Components.js/memo/ParentComponent";
// import ErrorBoundary from "./Components.js/errorBoundaries/ErrorBoundary";
// import Hero from "./Components.js/errorBoundaries/Hero";
import ClickCounter from "./Components.js/HOC/ClickCounter";
import HowerCounter from "./Components.js/HOC/HowerCounter";

function App() {
  return (
    <div>
      <ClickCounter name= "irfan"/>
      <HowerCounter />
    </div>
  );
}

export default App;
