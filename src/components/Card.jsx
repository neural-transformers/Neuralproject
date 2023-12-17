import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center p-4 md:p-0  text-gray-700 bg-white shadow-md bg-clip-border rounded-md md:rounded-3xl md:w-80"> {/* Adjusted width to md:w-80 */}
            <div className="h-40 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 rounded-md md:rounded-t-3xl md:rounded-l-3xl md:w-full shadow-blue-gray-500/40"> {/* Adjusted height to h-40 */}
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="card-image"
                    className="object-cover w-full h-full rounded-md"
                />
            </div>
            <div className="p-4 w-full bg-white rounded-md shadow-md">
                <div className="flex mb-2 justify-between">
                    <h5 className="font-bold mb-1 text-lg leading-snug text-orange"> {/* Adjusted text size and mb-2 to mb-1 */}
                        Data Science
                    </h5>
                    <span className="mb-1 text-liteyellow">4.9</span>
                </div>
                <h2 className="font-bold block mb-1 text-blue-gray-900"> {/* Adjusted text size and mb-4 to mb-1 */}
                    Duration: 3 - 4 Months
                </h2>
                <p className="block font-normal text-gray leading-relaxed text-inherit">
                    Our Data Science training program covers a wide range of topics, including data manipulation.
                </p>
            </div>
            <div className="p-3 pt-0 pb-3 md:p-4 md:py-4 px-3 md:px-4 w-full bg-white rounded-b-md shadow-md flex flex-col items-center"> {/* Adjusted padding and rounded-b-md */}
                <button className="bg-purple text-white hover:bg-blue-700 py-2 px-6 rounded-full">
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card