// import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main>
        {/* <Link href="/about">About Page</Link> */}
        <Navigation />
        <h1 className='text-center bg-lime-300 p-4'>Welcome to Home Page of recipe app</h1>
    </main> 
  );
}
