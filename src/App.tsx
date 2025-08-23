import { ThemeProvider } from "./context/ThemeProvider";
import ToggleDarkMode from "./component/ToggleDarkMode";

export default function App() {
  return (
    <ThemeProvider>
      <ToggleDarkMode />
      {/* other components */}
    </ThemeProvider>
  );
}
