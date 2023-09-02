import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="">
        <div className="">
          <h1 className="">
            <span className="">I&apos;m a Full-stack Developer</span>
            <span className="">I love to build an amazing apps.</span>
          </h1>
        </div>
        <div className=""></div>
      </div>

      <div className="">
        <a href="https://instagram.com/syauqeesy" target="_blank">
          <i className="bi bi-instagram cursor-pointer"></i>
        </a>
        <a href="https://linkedin.com/in/syauqeesy" target="_blank">
          <i className="bi bi-linkedin cursor-pointer"></i>
        </a>
        <a href="https://github.com/bee-hoon" target="_blank">
          <i className="bi bi-github cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
