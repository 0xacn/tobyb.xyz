import '../styles/globals.css'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  border: "none",
  background: "rgba(255, 255, 255, 0.98)",
  color: "var(--foreground)",
  borderBottom: "0.5px solid #f0f0f0",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  opacity: 1,
  color: "#8f8f8f",
  background: "rgba(255, 255, 255, 0.98)",
};


function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "rgba(255, 255, 255, 0.98)" ,
              padding: "0.8rem 1.5rem",
              boxShadow: "var(--shadow)",
              //borderLeft: `3px solid ${active ? "transparent" : "transparent"}`,
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              //padding: "12px 16px",
              height: "100",
               borderLeft: `0px solid ${
               active ? "var(--foreground)" : "transparent"
             }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: 16,
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

function MyApp({ Component, pageProps }) {
  const actions = [
    // Navigation
    {
      id: "home",
      name: "Home",
      shortcut: ["r", "h"],
      keywords: "home return h index",
      section: "Navigation",
      perform: () => window.open("/", "_self"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about command who a toby me ",
      section: "Navigation",
      perform: () => window.open("/about", "_self"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects p open source work",
      section: "Navigation",
      perform: () => window.open("/projects", "_self"),
    },
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words blog b hello",
      section: "Navigation",
      perform: () => window.open("/blog", "_self"),
    },
    // Social
    {
    id: "email",
    name: "Email",
    shortcut: ["e"],
    keywords: "email hello message send e talk communicate speak",
    section: "Social",
    perform: () => window.open("mailto:mail.toby@icloud.com", "_blank"),
  },
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm t s",
    section: "Social",
    perform: () => window.open("https://twitter.com/DevelopedByToby", "_blank"),
  },
  {
    id: "githubAction",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "source code g",
    section: "Social",
    perform: () => window.open("https://github.com/itstobez", "_blank"),
  },
  {
    id: "donate",
    name: "Donate",
    shortcut: ["g", "h"],
    keywords: "buy coffee donate b m a c",
    section: "Social",
    perform: () => window.open("https://www.buymeacoffee.com/tobyb", "_blank"),
  },
  // Utilities
  {
    id: "status",
    name: "Status",
    shortcut: ["s"],
    keywords: "status s",
    section: "Utilities",
    perform: () => window.open("https://tobybxyz.statuspage.io/", "_blank"),
  },
  {
    id: "sourcecode",
    name: "Source Code",
    shortcut: ["s", "c"],
    keywords: "source code s",
    section: "Utilities",
    perform: () => window.open("https://github.com/ItsTobez/tobyb.xyz-v2/", "_blank"),
  },
  {
    id: "commits",
    name: "Latest Commits",
    shortcut: ["l", "c"],
    keywords: "code l c commit late",
    section: "Utilities",
    perform: () => window.open("https://github.com/ItsTobez/tobyb.xyz-v2/commits/main", "_blank"),
  },
  ];

  return (
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle}/>
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <Component {...pageProps} />
      </KBarProvider>
    );
  }

export default MyApp

// MASSIVE thank you to Ella for helping me with kbar,
// I strongly recommend you check out her github here: https://github.com/eilla1 :)
