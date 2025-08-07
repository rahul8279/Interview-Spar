import { LuCopy, LuCheck, LuCode } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useQuestionStore } from "../store/useQuestionStore";

const Apires = () => {
  const { concept, closeConcept, isLoading } = useQuestionStore();
  if (isLoading) {
    return (
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );
  }
  if (!concept) {
    return <h1 className="text-center text-6xl">Something went wrong <br /> Try Again </h1>
  }
  return (
    <div className=" w-xl shadow-2xl border-gray-500">
      <div className="  flex flex-col gap-3 relative">
        <h1 className="text-xl font-bold text-blue-400 ">
          {" "}
          Q- {concept?.title}
        </h1>
        <MdOutlineCancel
          className="text-xl absolute right-0 top-0 cursor-pointer"
          onClick={closeConcept}
        />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p({ children }) {
              return <p className=" leading-5">{children}</p>;
            },
            strong({ children }) {
              return <strong>{children}</strong>;
            },
            em({ children }) {
              return <em>{children}</em>;
            },
            ul({ children }) {
              return (
                <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>
              );
            },
            ol({ children }) {
              return (
                <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>
              );
            },
            li({ children }) {
              return <li className="mb-1">{children}</li>;
            },
            blockquote({ children }) {
              return (
                <blockquote className="or pl-4 italic my-4">
                  {children}
                </blockquote>
              );
            },
            h1({ children }) {
              return (
                <h1 className="text-2xl font-bold mt-6 mb-4">{children}</h1>
              );
            },
            h2({ children }) {
              return (
                <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-lg font-bold mt-5 mb-2">{children}</h3>
              );
            },
            h4({ children }) {
              return (
                <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>
              );
            },
            a({ children, href }) {
              return (
                <a href={href} className="text-blue-600 hover:underline">
                  {children}
                </a>
              );
            },
            table({ children }) {
              return (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y ">{children}</table>
                </div>
              );
            },
            thead({ children }) {
              return <thead>{children}</thead>;
            },
            tbody({ children }) {
              return <tbody className="divide-y">{children}</tbody>;
            },
            tr({ children }) {
              return <tr>{children}</tr>;
            },
            th({ children }) {
              return (
                <th className="px-3 py-2 text-left text-xs font-medium ">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="px-3 py-2 whitespace-nowrap text-sm">
                  {children}
                </td>
              );
            },
            hr() {
              return <hr className="my-6 " />;
            },
            img({ src, alt }) {
              return (
                <img src={src} alt={alt} className="my-4 max-w-full rounded" />
              );
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneLight}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md my-4"
                  wrapLines={true}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className=" px-1 py-0.5 rounded ">{children}</code>
              );
            },
          }}
        >
          {concept?.explanation}
        </ReactMarkdown>
      </div>
    </div>
  );
};

function codeblock() {}
export default Apires;
