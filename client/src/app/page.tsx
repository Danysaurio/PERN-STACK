"use client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import Nav from "@/components/Nav";
import List from "@/components/List";
import Addform from "@/components/Addform";
import { store } from "@/store/store";
import { ReduxAlert } from "@/components/Alert/ReduxAlert";

const queryclient = new QueryClient();

export default function Home() {
  return (
    <main>
      <Nav />
      <Provider store={store}>
        <QueryClientProvider client={queryclient}>
          <section className="container mx-auto grid grid-cols-10 h-screen relative">
            <div className="col-span-4 flex justify-center items-center">
              <Addform />
            </div>
            <div className="col-span-6 flex items-center">
              <List />
            </div>
            <ReduxAlert />
          </section>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}
