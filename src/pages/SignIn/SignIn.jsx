import logoImage from "../../assets/logotransparente.png";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/Sidebar";
import Moon from "../../assets/Moon.png";
import LogoSinapsense from "../../assets/logo_sinapsense 1.png";

function SignIn() {
  return (
    <div className="flex flex-row text-center w-full items-center justify-between">
      <div className="hidden lg:flex flex-col h-min p-20 gap-10 bg-black/50 rounded-e-xl">
        <img src={logoImage} alt="Logo Transparente" className="w-100" />
        <div className="flex flex-col gap-4 items-start ">
          <h1 className="font-bold text-6xl">SINAPEYE</h1>
          <h1 className="text-5xl">Sistema de Eyetracking</h1>
        </div>
      </div>
      <Sidebar>
        <form
          action=""
          className="flex flex-col items-center justify-center gap-10 h-screen"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={LogoSinapsense}
              alt="Logo Sinapsense"
              className="w-16 h-16"
            />
            <button className="bg-black rounded-full w-15 h-15 p-2 hover:bg-gray-800">
              <img src={Moon} alt="Moon" />
            </button>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="email"
              className="text-sm font-bold text-black text-left"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="border border-black bg-gray-200 rounded-md p-2 text-black"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="password"
              className="text-sm font-bold text-black text-left"
            >
              SENHA
            </label>
            <input
              type="password"
              id="password"
              className="border border-black bg-gray-200 rounded-md p-2 text-black"
            />
          </div>

          <Button text="FAZER LOGIN" className="px-8 text-white self-center" />
          <div className="flex items-center my-2 w-full">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 text-black font-bold text-sm">ou</span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <Button
            text="CRIAR CONTA"
            className="px-7.5 text-white self-center"
          />
        </form>
      </Sidebar>
    </div>
  );
}

export default SignIn;
