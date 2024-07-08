import BookItem from "./BookItem";
function Books() {
    const books = [
        {
            title: "The Lean Startup",
        },
        {
            title: "Zero to One",
        },
        {
            title: "Hooked",
        },
    ];


    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                books.map((book, index) => (
                    <BookItem key={index} title={book.title} />
                ))
            }
        </div>
    )
}

export default Books