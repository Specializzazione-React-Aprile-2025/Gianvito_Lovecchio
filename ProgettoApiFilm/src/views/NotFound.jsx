import { Link } from "react-router";

function NotFound() {
    return (
        <div>
            <h1 className='m-8 text-center text-blue-400 font-bold text-4xl'>Page not found</h1>
            <Link to="/" end>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto my-10 cursor-pointer">HomePage</button>
            </Link>
        </div>
    );
}

export default NotFound