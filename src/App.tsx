import React from "react";
import "./App.css";
import { Md5 } from "md5-typescript";
import AcccessibleTable from "./components/table/table";

function App() {
    console.log(Md5.init("fdsfdsfds"));

    return (
        <>
            <AcccessibleTable />
        </>
    );
}

export default App;
