import logoImage from '../../assets/logotransparente.png';
import Button from '../../components/Button/Button';
import Sidebar from '../../components/Sidebar';
import Moon from '../../assets/Moon.png';
import LogoSinapsense from '../../assets/logo_sinapsense 1.png';

function SignIn() {
  return (
    <div className="text-center">
      <Sidebar/>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-20 bg-black/50 rounded-lg">
        <img src={logoImage} alt="Logo Transparente" className="w-48.9 h-27.4"/>
        <div className="flex flex-col gap-4 ml-8 mb-2 mt-16  items-start ml-5">
          <h1 className='font-bold text-6xl'>SINAPEYE</h1>
          <h1 className='text-5xl'>Sistema de Eyetracking</h1>
          </div>
      </div>
        <form action=""  className="flex flex-col gap-4 fixed right-0 top-0 h-screen w-1/4 w-80 shadow-lg flex flex-col p-4 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={LogoSinapsense} alt="Logo Sinapsense" className="w-16 h-16"/>
            <img src={Moon} alt="Moon" className="bg-black rounded-full w-10 h-10"/>
          </div>
          <label htmlFor="email" className="text-sm font-bold text-black text-left">EMAIL</label>
          <input type="email" id="email" className="border border-black bg-gray-200 rounded-md p-2"/>
          <label htmlFor="password" className="text-sm font-bold text-black text-left">SENHA</label>
          <input type="password" id="password" className="border border-black bg-gray-200 rounded-md p-2"/>
          <Button text="FAZER LOGIN" className="px-8 text-white self-center"/>
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 text-black font-bold text-sm">ou</span>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <Button text="CRIAR CONTA" className="px-7.5 text-white self-center"/>

        </form>
    </div>
  );
}

export default SignIn;
