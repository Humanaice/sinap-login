import SignIn from "../pages/SignIn/SignIn.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import NotFoundPage from "../pages/NotFound/NotFoundPage.jsx";

export const appRoutes = [
  { path: "/", element: <SignIn />, label: "Entrar" },
  { path: "/cadastro", element: <SignUp />, label: "Cadastrar" },
  { path: "*", element: <NotFoundPage /> },
];
