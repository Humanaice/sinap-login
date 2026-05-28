import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../../app/routes";
import backgroundImage from "../../assets/backgroundImage.png";

function RootLayout() {
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center fixed inset-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-green-500/20 to-blue-600/30"></div>
      <main className="relative mx-auto flex h-screen w-full items-center justify-center px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
