import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    // Configure the ThemeProvider
    <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
