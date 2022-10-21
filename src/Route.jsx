import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {App} from "../src/home/home";
import {Profile} from "../src/profile/Profile";
import {Hobbies} from "../src/hobbies/Hobbies";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}
