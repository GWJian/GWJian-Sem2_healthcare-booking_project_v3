import "@/styles/globals.css";
import Nav from "@/components/Nav";
import DefaultFooter from "@/components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { useState, useEffect } from "react";
import localforage from "localforage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: 1000 * 60 * 60 * 24 },
  },
});

export default function App({ Component, pageProps }) {
  //===== check is user login start =====
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await localforage.getItem("token");
      if (token) {
        setAuth(token);
      }
    };
    getToken();
  }, []);
  //===== check is user login end =====
  //================ Role Start =================
  const [user, setUser] = useState();

  useEffect(() => {
    const getToken = async () => {
      const token = await localforage.getItem("token");
      if (token) {
        setUser(token.user);
      }
    };
    getToken();
  }, []);
  // console.log(user);
  //================ Role End =================

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Component {...pageProps} />

        {/* if doctor hide Defaultfooter */}
        {auth && auth.user.role === "doctor" ? null : <DefaultFooter />}
      </div>
    </QueryClientProvider>
  );
}
