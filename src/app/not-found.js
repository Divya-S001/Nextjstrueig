import Link from "next/link";

export default function NotFound(){
    return (
 <div className=" text-center mt-60">
    <h2 className="text-black font-bold text-4xl"> Not Found</h2>
    <p className="text-black font-bold text-4xl">Could not find requestes resource</p>
    <Link href="/" className="text-blue-500 hover:underline"> Return Home</Link>
     </div>


    )
}