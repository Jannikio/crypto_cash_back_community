export default function Video() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl">
                <iframe 
                className="w-full h-64 md:h-96 rounded-lg shadow-lg" 
                src="https://www.youtube.com/embed/JaTg9b4qqhw" 
                title="💡 How it works" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}
