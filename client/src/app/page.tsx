"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import Nav from "@/components/Nav";
import List from "@/components/List";
import { store } from "@/store/store";
import Addform from "@/components/Addform";
import DeleteModal from "@/components/DeleteModal";
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
            <DeleteModal />
          </section>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}
