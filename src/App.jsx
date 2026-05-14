import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./app/routes";
import RootLayout from "./layouts/RootLayout/RootLayout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
