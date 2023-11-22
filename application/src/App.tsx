import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <section className="main p-2.5 lg:py-6 lg:px-20 lg:mt-20">
        <div>
          <h1>
            <span className="block lg:font-bold lg:text-6xl lg:mb-10">
              I&apos;m a Full-stack Developer,
            </span>
            <span className="block lg:font-medium lg:text-4xl">
              I love to build amazing apps.
            </span>
          </h1>
        </div>

        <div className="lg:ml-20 lg:py-6 lg:mt-10">
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
      </section>
      <section id="experience" className="p-2.5 lg:py-6 lg:px-20 lg:mt-20">
        <h2 className="block lg:font-medium lg:text-4xl lg:mb-20">
          experience.
        </h2>
        <ul>
          <li className="lg:mb-20">
            <div className="lg:flex lg:justify-items-center lg:ml-20">
              <img
                className="block lg:mr-28 lg:w-20"
                src="./assets/investly-id-logo.jpeg"
                alt="PT Investasi Cerdas Bersama"
              />
              <div className="experience-description">
                <p className="lg:text-xl lg:font-medium lg:mb-5">
                  PT Investasi Cerdas Bersama
                </p>
                <p className="lg:text-slate-600 lg:text-sm">
                  Full-stack Developer | Sept. 2022 - Present
                </p>
              </div>
            </div>
          </li>
          <li className="lg:mb-20">
            <div className="lg:flex lg:justify-items-center lg:ml-20">
              <img
                className="block lg:mr-28 lg:w-20"
                src="./assets/jne-logo.jpeg"
                alt="PT Tiki Jalur Nugraha Ekakurir"
              />
              <div className="experience-description">
                <p className="lg:text-xl lg:font-medium lg:mb-5">
                  PT Tiki Jalur Nugraha Ekakurir
                </p>
                <p className="lg:text-slate-600 lg:text-sm">
                  Software Engineer | Sept. 2021 - Sept. 2022
                </p>
              </div>
            </div>
          </li>
          <li className="lg:mb-20">
            <div className="lg:flex lg:justify-items-center lg:ml-20">
              <img
                className="block lg:mr-28 lg:w-20"
                src="./assets/pt-dirgantara-indonesia-logo.jpeg"
                alt="PT Dirgantara Indonesia"
              />
              <div className="experience-description">
                <p className="lg:text-xl lg:font-medium lg:mb-5">
                  PT Dirgantara Indonesia
                </p>
                <p className="lg:text-slate-600 lg:text-sm">
                  Web Developer | Jan. 2019 - Mar. 2019
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="contact" className="p-2.5 lg:py-6 lg:px-20 lg:mt-20">
        <h2 className="block lg:font-medium lg:text-4xl lg:mb-20">contact.</h2>
        <p className="lg:ml-20">
          Email: <a href="mailto:syauqeesy@gmail.com">syauqeesy@gmail.com</a>
        </p>
      </section>

      <footer className="footer p-2.5 lg:py-12 lg:px-20 lg:mt-20 bg-black">
        <p className="text-center text-white">Build with love by @syauqeesy.</p>
      </footer>
    </div>
  );
}

export default App;
