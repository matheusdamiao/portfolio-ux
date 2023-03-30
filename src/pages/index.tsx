import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center w-full h-screen bg-slate-700 font-source ">
        <p className="text-5xl px-3 py-3 md:px-0 md:py-0 font-bold text-gray-300 text-center">
          Hello, I'm Luana Antunes
        </p>
        <small className="text-gray-400 text-3xl px-3 py-3 md:px-0 md:py-3">
          {" "}
          UX Designer{" "}
        </small>

        <div className="flex justify-center gap-5 mt-8 text-gray-400 ">
          <a
            href="https://www.behance.net/gallery/160503125/DOGGY-UXUI-Design-projeto"
            target="_blank"
            className="underline hover:no-underline"
          >
            behance
          </a>
          |
          <a
            href="https://www.linkedin.com/in/luanaantunes0/"
            target="_blank"
            className="underline hover:no-underline"
          >
            linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title> Luana Antunes | UX Designer</title>;
