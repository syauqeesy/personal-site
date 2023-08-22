import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="container flex mx-auto md:mt-44 md:mb-20">
        <div className="grow">
          <h1 className="flex flex-col">
            <span className="block md:font-semibold md:text-5xl md:mb-5">
              I&apos;m a Full-stack Developer
            </span>
            <span className="block md:font-medium md:text-3xl">
              I love to build an amazing apps.
            </span>
          </h1>
        </div>
        <div className="grow"></div>
      </div>

      <div className="container mx-auto">
        <a href="https://instagram.com/syauqeesy" target="_blank">
          <i className="bi bi-instagram cursor-pointer text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/syauqeesy" target="_blank">
          <i className="bi bi-linkedin cursor-pointer text-2xl md:ml-10"></i>
        </a>
        <a href="https://github.com/bee-hoon" target="_blank">
          <i className="bi bi-github cursor-pointer text-2xl md:ml-10"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
