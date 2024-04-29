"use client";
import Nav from "@/components/Nav";
import Addform from "@/components/Addform";
import List from "@/components/List";

import { Provider } from "react-redux";

import { store } from "@/store/store";

export default function Home() {
  return (
    <main>
      <Nav />
      <Provider store={store}>
        <section className="container mt-10 mx-auto grid grid-cols-10 h-screen">
          <div className="col-span-4 flex justify-center items-center">
            <Addform />
          </div>
          <div className="col-span-6 flex items-center">
            <List />
          </div>
        </section>
      </Provider>
    </main>
  );
}
