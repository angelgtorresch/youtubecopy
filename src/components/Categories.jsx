export default function Categories() {

    const categories = [
    "All",
    "Music",
    "Gamming",
    "Code",
    "Programing",
    "Life Syle",
    "Sport",
];
    return(
        <div className="flex flex-row gap-4">
            
            {categories.map((category) => {
                return (
                    <span key={`categoy-${category}`} 
                    className="p-[0.5rem_1rem] rounded-[25px] bg-[#282828]">
                        {category}
                    </span>
                );
            })}

        </div>
    );
}

