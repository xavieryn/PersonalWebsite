import Head from 'next/head';
import Header from "../src/Header";
import Navbar from "../src/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Header />
        </div>
    )
}
