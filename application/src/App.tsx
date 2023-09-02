import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="container flex mx-auto lg:mt-44 lg:mb-20">
        <div className="grow">
          <h1 className="flex flex-col">
            <span className="block lg:font-semibold lg:text-5xl lg:mb-5">
              I&apos;m a Full-stack Developer
            </span>
            <span className="block lg:font-medium lg:text-3xl">
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
          <i className="bi bi-linkedin cursor-pointer text-2xl lg:ml-10"></i>
        </a>
        <a href="https://github.com/bee-hoon" target="_blank">
          <i className="bi bi-github cursor-pointer text-2xl lg:ml-10"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
