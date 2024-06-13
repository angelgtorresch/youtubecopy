import clsx from "clsx";

export default function Video({image, title, channel}) {

   /* if (!channel) {
        return (
            <article>
                <p>INCOMPLETO</p>
            </article>
        );
    } */

    return (
    <article className={clsx("video-card flex flex-col gap-2", 
    {"special border rounded border-red-600": channel})}>
        <img className="w-full rounded-[10px] objet-cover aspect-video"
        src={image} alt= ""/>
        <footer className="grid gap-2 grid-cols-[3rem_1fr]">
           <img className="col-start-1 col-end-2 w-8 h-8 rounded-[50%]"
           src={`https://api.dicebear.com/8.x/avataaars/svg?seed-${channel}`}
            alt= ""/>
           <p className="col-start-2 col-end-3">{title}</p>  
           <p className="col-start-2 col-end-3">{channel}</p>
        </footer>
    </article>
    );
}