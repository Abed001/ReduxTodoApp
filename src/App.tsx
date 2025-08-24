import { ThemeProvider } from "./context/ThemeProvider";
import Home from "./page/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      {/* other components */}
    </ThemeProvider>
  );
}
