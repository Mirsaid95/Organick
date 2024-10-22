import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";


export const Mainlayout =({children})=>{
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}