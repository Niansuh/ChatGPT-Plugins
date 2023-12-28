import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "WebSearch",
    toolName: "web-search",
    lang: "en",
    description: "Web search tool.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Calculator",
    toolName: "calculator",
    lang: "en",
    description:
      "Evaluates math, extends Tool.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "WebBrowser",
    toolName: "web-browser",
    lang: "en",
    description:
      "Extract or summarize content.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Wikipedia",
    toolName: "WikipediaQueryRun",
    lang: "en",
    description:
      "Wikipedia API tool.",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "en",
    description: "Arxiv article search tool.",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "PDFBrowser",
    toolName: "pdf-browser",
    lang: "en",
    description:
      "Summarize content, extract URLs.",
    builtin: true,
    createdAt: 1700907315000,
    enable: false,
    onlyNodeRuntime: true,
  },
];
