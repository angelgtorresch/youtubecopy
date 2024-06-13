import YouTubeLogo from "./YoutubeLogo";


export default function Navbar() {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
                <YouTubeLogo height="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div>
            <div className="flex justify-center items-center">
                <input className="w-full p-[0.5rem_1rem] border border-[#282828] rounded-2x1 bg-transparent"
                type="text" placeholder="Search" />
            </div>
            <div className="flex justify-end">
             <img className="w-8 h-8 rounded-[50%]"
             src="https://api.dicebear.com/8.x/notionists/svg?seed=angel" 
             alt="user"/>
            </div>
        </nav>
    );
}