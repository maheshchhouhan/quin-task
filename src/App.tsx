import { FC, ReactElement } from "react";
import Launches from "./components/Launches/Index";

const App: FC = (): ReactElement => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      data-testid="app-container"
    >
      <Launches />
    </div>
  );
};

export default App;
