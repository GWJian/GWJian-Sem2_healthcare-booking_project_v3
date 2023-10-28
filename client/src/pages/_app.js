import "@/styles/globals.css";
import Nav from "@/components/Nav";
import DefaultFooter from "@/components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: 1000 * 60 * 60 * 24 },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Component {...pageProps} />
        <div className="flex-grow"></div>
        <DefaultFooter />
      </div>
    </QueryClientProvider>
  );
}
