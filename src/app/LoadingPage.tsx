import React, { useState, useEffect } from "react";

const LoadingPage = () => {
	const [elapsedTime, setElapsedTime] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedTime((prevTime) => prevTime + 1000);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / (60 * 1000)).toString();
		const seconds = Math.floor((time % (60 * 1000)) / 1000)
			.toString()
			.padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	return (
		<div className="bg-gray-100">
			{elapsedTime >= 1000 ?
				<div className="h-screen w-screen flex flex-col items-center justify-center px-4 pb-8 md:px-8 md:pb-12">
					<div className="flex flex-col items-center space-y-4">
						<h2 className="text-2xl font-semibold text-blue-500">
							Getting Things Ready!
						</h2>
						<p className="text-lg text-gray-600 text-center">
							Render is starting a free web service for this site. Thanks for your
							patience!
						</p>

						<p className="text-center">
							Web service deployed on render.com's{" "}
							<a
								href="https://render.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-700 font-semibold"
							>
								hobby developer plan
							</a>
							.
						</p>
						<p className="text-center">
							Static site hosted on netlify.com's{" "}
							<a
								href="https://netlify.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-700 font-semibold"
							>
								starter plan
							</a>
							.
						</p>
						<div className="text-3xl font-bold text-blue-500 animate-bounce text-center">
							{formatTime(elapsedTime)}
						</div>
					</div>

					<div className="flex justify-between items-center mt-8 space-x-4">
						<span className="text-gray-400">
							Icons by{" "}
							<a
								href="https://shape.so/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-700 font-semibold"
							>
								shape.so
							</a>
						</span>
					</div>
				</div>
			:	<></>}
		</div>
	);
};

export default LoadingPage;
