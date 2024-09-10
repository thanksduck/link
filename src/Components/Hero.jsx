import React, { useState } from 'react';

function Hero({ darkMode }) {
    const [link, setLink] = useState('');
    const [shortLink, setShortLink] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const linknew = link + "originalUrl: ";
        const lg = linknew.length.toString();
        try {
            const requestOptions = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Host": "go.20032003.xyz",
                    "Content-Length": lg,
                },
                body: JSON.stringify({ "originalUrl": link }),
            };

            const response = await fetch("/api", requestOptions);

            if (!response.ok) {
                throw new Error('Failed to shorten the link');
            }

            const data = await response.json();
            const shortUrl = data.shortUrl;

            setShortLink(`https://go.20032003.xyz/${shortUrl}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className={`px-4 py-2 flex flex-col items-center ${darkMode ? 'bg-slate-950' : 'bg-zinc-100'}`}>
            <div className={`flex flex-col items-center justify-center w-full max-w-md p-6 mt-6 rounded-lg shadow-lg ${darkMode ? 'bg-slate-700 text-white shadow-slate-300' : 'bg-white text-slate-700 shadow-gray-300'}`}>
                <h2 className="text-2xl font-semibold mb-4">{darkMode ? 'Shorten Your Links' : 'Shorten Your Links in Style'}</h2>
                <form onSubmit={handleClick} className="w-full">
                    <input
                        type="text"
                        name="link"
                        placeholder="https://www.example.com"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className={`w-full p-3 mb-4 rounded-lg shadow focus:outline-none focus:ring-2 ${darkMode ? 'bg-slate-600 border-slate-500 text-white focus:ring-blue-500' : 'bg-white border-gray-300 text-slate-700 focus:ring-blue-500'}`}
                    />
                    <button
                        type="submit"
                        className={`w-full py-3 font-semibold rounded-lg shadow transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 ${darkMode ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400' : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400'}`}
                    >
                        Shorten Link
                    </button>
                </form>
                {shortLink && (
                    <div className="mt-6 w-full text-center items-center">
                        <p className="text-lg font-semibold mb-4">Shortened Link:</p>
                        <a href={shortLink} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-center items-center bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                            {shortLink}
                        </a>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Hero;