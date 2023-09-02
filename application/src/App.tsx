import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="p-2.5 lg:py-6 lg:px-20 lg:mt-20">
        <div>
          <h1>
            <span className="block lg:font-bold lg:text-7xl lg:mb-10">
              I&apos;m a Full-stack Developer,
            </span>
            <span className="block text-slate-800 lg:text-5xl">
              I love to build amazing apps.
            </span>
          </h1>
        </div>
      </div>

      <div className="p-2.5 lg:py-6 lg:px-20 lg:mt-10">
        <a
          href="https://instagram.com/syauqeesy"
          className="underline"
          target="_blank"
        >
          <i className="bi bi-instagram cursor-pointer lg:text-2xl"></i>{" "}
          Instagram.
        </a>
        <a
          href="https://linkedin.com/in/syauqeesy"
          className="underline lg:ml-16"
          target="_blank"
        >
          <i className="bi bi-linkedin cursor-pointer lg:text-2xl"></i>{" "}
          LinkedIn.
        </a>
        <a
          href="https://github.com/bee-hoon"
          className="underline lg:ml-16"
          target="_blank"
        >
          <i className="bi bi-github cursor-pointer lg:text-2xl"></i> GitHub.
        </a>
      </div>
    </div>
  );
}

export default App;
