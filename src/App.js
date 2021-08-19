// import PortalDemo from "./Components.js/portals/PortalDemo";
// import FocusInput from "./Components.js/refs/FocusInput";
// import FRParentInput from "./Components.js/refs/FRParentInput";
// import RefsDemo from "./Components.js/refs/RefsDemo";
// import ParentComponent from "./Components.js/memo/ParentComponent";
// import ErrorBoundary from "./Components.js/errorBoundaries/ErrorBoundary";
// import Hero from "./Components.js/errorBoundaries/Hero";
// import ClickCounter from "./Components.js/HOC/ClickCounter";
// import Rahul from "./Components.js/HOC/Rahul";
// import Sonam from "./Components.js/HOC/Sonam";
// import HowerCounter from "./Components.js/HOC/HowerCounter";
// import ClickCounter2 from "./Components.js/renderProps/ClickCounter2";
// import HoveredCounter2 from "./Components.js/renderProps/HoverCounter2";
// import User from "./Components.js/renderProps/User";
import Counter from "./Components.js/renderProps/Counter";
import HoverCounter2 from "./Components.js/renderProps/HoverCounter2";
import ClickCounter2 from "./Components.js/renderProps/ClickCounter2";
function App() {
  return (
    <div>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
