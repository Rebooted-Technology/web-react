import React, { useState, useEffect } from "react"

const LoadingPage = () => {
	const [elapsedTime, setElapsedTime] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedTime((prevTime) => prevTime + 1000)
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / (60 * 1000)).toString()
		const seconds = Math.floor((time % (60 * 1000)) / 1000)
			.toString()
			.padStart(2, "0")
		return `${minutes}:${seconds}`
	}

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

						tldr: https://chatgpt.com/c/6769ef29-d3ac-8011-b55d-9350cff3f96e

						<br/>

						In Hungary, the formation and operation of business entities are primarily governed by Act V of 2013 on the Civil Code. The most common types of business associations include:

Limited Liability Company (Korlátolt Felelősségű Társaság - Kft.): Requires a minimum registered capital of HUF 3,000,000. Members have limited liability up to their capital contributions.

Private Company Limited by Shares (Zártkörűen Működő Részvénytársaság - Zrt.): Requires a minimum registered capital of HUF 5,000,000. Shares are not publicly traded.

Limited Partnership (Betéti Társaság - Bt.): No minimum capital requirement. At least one member has unlimited liability, while others have limited liability.

General Partnership (Közkereseti Társaság - Kkt.): No minimum capital requirement. All members have unlimited liability.

The incorporation process can be expedited through simplified electronic filing, with the Court of Registry making decisions within one working day. This procedure is available for Kft., Bt., Kkt., and Zrt. 
ACCACE

Taxation for Companies in Hungary:

Corporate Income Tax (CIT): Hungary has a flat corporate tax rate of 9%, one of the lowest in the European Union. 
WIKIPEDIA

Local Business Tax (LBT): Municipalities may levy a local business tax, with rates varying by locality. For example, Budapest imposes a 2% LBT on net sales revenue. 
INCORPORATIONS

Value Added Tax (VAT): The standard VAT rate is 27%, with reduced rates of 18% and 5% applicable to certain goods and services. 
WIKIPEDIA

Social Contributions: Employers are required to pay a social contribution tax of 13% on gross wages. 
WIKIPEDIA

Compensation and Income Requirements:

Minimum Wage: As of 2024, the minimum wage in Hungary is subject to annual adjustments. Employers must comply with the current minimum wage regulations.

Employee Income Tax: Employees are subject to a flat personal income tax rate of 15% on their earnings. 
WIKIPEDIA

Social Security Contributions: Employees contribute 18.5% of their gross wages towards social security, covering pension, health insurance, and labor market contributions. 
WIKIPEDIA

It's essential for companies operating in Hungary to stay informed about current tax rates and labor regulations, as these can change. Consulting with legal and tax professionals is advisable to ensure compliance with all statutory requirements.
					</div>
				</div>
			:	<></>}
		</div>
	)
}

export default LoadingPage
