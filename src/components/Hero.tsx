import { Box, Modal, Typography } from "@mui/material"
import Books from "./Books"
import CreateBook from "./CreateBook"

function Hero() {
    return (
        <div>
            <div className="container items-center justify-center py-[38px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-white">
                        You have got <span className="text-dark-blue">7 books</span>
                    </h1>
                    {/* <button className="bg-dark-blue text-white py-[10px] px-6 rounded-[4px]">
                        + Create a book
                    </button> */}
                    <CreateBook />
                </div>
                <p className="text-zinc-50 mt-3">Your books today.</p>
            </div>
            <Books />
        </div>
    )
}

export default Hero