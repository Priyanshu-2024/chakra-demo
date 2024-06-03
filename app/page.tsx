// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import Header from "./components/headers";
import Home from "./components/home";
import "./styles/headers.css";
import "./styles/home.css";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
