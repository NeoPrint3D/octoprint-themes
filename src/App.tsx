import { FiClipboard, FiCopy, FiGithub, FiInfo, FiStar } from "react-icons/fi";
import { useCopyToClipboard } from "react-use";
import toast from "react-hot-toast";
import { useRef } from "react";

interface Theme {
  name: string;
  description: string;
  thumbnailPath: string;
  cssPath: string;
  githubUrl?: string;
}

// I currently have dracula cattpucin and synthwave84 current url is http://octoprint-themes.neoprint3d.dev/
function App() {
  const [_, copyToClipboard] = useCopyToClipboard();
  const themeRef = useRef<HTMLDivElement>(null);
  const themes: Theme[] = [
    {
      name: "Dracula",
      description: "A dark theme inspired by Dracula.",
      thumbnailPath: "/images/thumbs/dracula.png",
      githubUrl: "https://github.com/dracula/dracula-theme",
      cssPath: "/themes/dracula.css",
    },
    {
      name: "Catppuccin",
      description: "😸 Soothing pastel theme for the high-spirited!",
      thumbnailPath: "/images/thumbs/catppuccin.png",
      githubUrl: "https://github.com/catppuccin/catppuccin",
      cssPath: "/themes/catppuccin.css",
    },
    {
      name: "Synthwave84",
      description: "A theme inspired by the Synthwave music and aesthetic.",
      thumbnailPath: "/images/thumbs/synthwave84.png",
      cssPath: "/themes/synthwave84.css",
    },
  ];

  async function copyImportUrl(cssPath: string) {
    copyToClipboard(`@import url('${window.location.origin}${cssPath}');`);
    toast("Copied", { icon: <FiClipboard />, duration: 2000 });
  }
  async function copyFullCss(cssPath: string) {
    const css = await (await fetch(window.location.origin + cssPath)).text();

    copyToClipboard(css);
    toast("Copied!", { icon: <FiClipboard />, duration: 2000 });
  }

  return (
    <>
      <header className="top-4 fixed z-50 flex justify-center w-full">
        <nav className="flex items-center py-3 px-5 bg-base-100/20 backdrop-blur-md rounded-full max-w-sm w-full sm:max-w-xl border border-white/20">
          <div>
            <a href="/">
              <div className="flex items-center font-title font-bold text-xl">
                NP3D's Themes
              </div>
            </a>
          </div>
          <div className="flex items-center gap-5 ml-5">
            <button
              onClick={() =>
                themeRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="link font-title font-semibold text-neutral-content"
            >
              Themes
            </button>
          </div>
          <div className="ml-auto">
            <a
              href="https://github.com/NeoPrint3D/octoprint-themes"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm btn-outline"
            >
              <FiStar />
              Star
            </a>
          </div>
        </nav>
      </header>
      <main className="bg-base-200 flex flex-col relative text-white items-center font-body scroll-smooth min-h-[100dvh]">
        <section className="h-[100dvh] w-screen relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div
              style={{
                maskImage:
                  "linear-gradient(to top,rgba(0,0,0,0) 25%, rgba(0,0,0,1), rgba(0,0,0,0)  97.5%)",
              }}
            >
              <img
                src="/images/octoprint.png"
                alt="Octoprint Logo"
                height={600}
                width={600}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="hero min-h-[100dvh]">
              <div className="hero-content text-center">
                <div className="max-w-md p-7">
                  <h1 className="text-5xl font-bold">Octoprint Themes</h1>
                  <h2>
                    By{" "}
                    <a
                      className="link-primary link"
                      href="https://github.com/NeoPrint3D"
                    >
                      NeoPrint3D
                    </a>
                  </h2>
                  <p className="py-6">
                    A collection of themes for Octoprint's plugin UI Customizer.
                    Just copy and paste into the advanced settings for custom
                    css
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      themeRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Themes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-screen min-h-[100dvh] relative" ref={themeRef}>
          <div className="flex justify-center items-center min-h-[100dvh] flex-col py-20">
            <div className="relative w-full flex justify-center items-center">
              <h1 className="text-5xl font-bold mb-20">Themes</h1>
            </div>
            <div className="grid grid-cols-1 gap-y-20 w-full md:grid-cols-2 lg:grid-cols-3 max-w-[100rem]">
              {themes.map((theme) => (
                <div className="card w-96 bg-base-100/20 backdrop-blur-md border border-white/20 shadow-lg mx-auto shadow-primary/20">
                  <figure className="m-3 rounded-xl">
                    <img src={theme.thumbnailPath} alt="Placeholder image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {theme.githubUrl && (
                        // opne a new tab
                        <a
                          href={theme.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {theme.name}{" "}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{theme.description}</p>
                    <div className="flex justify-around mt-5">
                      <button
                        className="btn text-xs btn-sm h-12 btn-primary btn-outline"
                        onClick={() => copyImportUrl(theme.cssPath)}
                      >
                        <FiCopy />
                        Copy Import URL
                      </button>
                      <button
                        className="btn btn-sm text-xs h-12 btn-primary"
                        onClick={() => copyFullCss(theme.cssPath)}
                      >
                        <FiCopy />
                        Copy Full CSS
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="bg-gradient-to-tr from-primary to-secondary w-[50rem] h-[25rem] rounded-full -translate-y-[7.5rem]" />
        </div>
        <div className="absolute h-full w-full flex items-end justify-center">
          <div className="bg-gradient-to-r from-secondary via-primary to-primary w-[50rem] h-[12rem] rounded-t-full " />
        </div>
        <div className="h-full w-full absolute backdrop-blur-[75px]" />
      </main>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src="/images/octoprint.png" width={50} height={50} />
          <p>
            Octoprint Themes by{" "}
            <a
              className="link link-primary"
              href="https://github.com/NeoPrint3D
            "
            >
              NeoPrint3D
            </a>
          </p>
        </aside>
        <div className="flex ">
          <div className="alert alert-info">
            <FiInfo />
            <span>More Themes and Updates Coming Soon.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
