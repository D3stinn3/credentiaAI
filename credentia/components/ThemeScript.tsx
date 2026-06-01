export function ThemeScript() {
  const script = `
    (function () {
      try {
        var key = "credentia-theme";
        var stored = localStorage.getItem(key);
        if (stored === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
