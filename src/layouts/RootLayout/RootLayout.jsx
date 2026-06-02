import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../../app/routes";
import backgroundImage from "../../assets/backgroundImage.png";

function RootLayout() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center fixed inset-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#00BED5] opacity-60 "></div>
      <div className="absolute inset-0 bg-black opacity-40 "></div>
      <main className="relative flex w-full items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
