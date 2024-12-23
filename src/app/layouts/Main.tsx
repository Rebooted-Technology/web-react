import { Button } from "@material-tailwind/react"
import { useState } from "react"

interface GetStartedValuePropositionProps {
	forWho: string
	description: string
	click?: () => void
}

const GetStartedValueProposition: React.FC<GetStartedValuePropositionProps> = ({
	forWho,
	description,
	click,
}) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			className="border-none border-2 rounded-md p-2 text-gray-800 hover:bg-blue-50 hover:cursor-pointer active:bg-blue-100"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={click}
		>
			<div className="flex flex-row flex-nowrap">
				<div className="flex-auto grow">
					<p className="text-2xl">
						<span>For</span> <span className="font-bold">{forWho}</span>
					</p>
					<p className="text-sm">{description}</p>
				</div>
				<div
					className={`flex-none grow-0 flex items-center w-6 ml-2 ${isHovered ? "opacity-80" : "opacity-30"}`}
				>
					<img src="icons/chevron_large_right.png" alt="" />
				</div>
			</div>
		</div>
	)
}

const Main: React.FC = () => {
	return (
		<div className="flex h-screen">
			{/* left screen side */}
			<div className="flex-1 flex md:items-center justify-center bg-gray-100">
				{/* card */}
				<div className="max-w-xl w-full p-6 bg-white rounded-none shadow-md">
					{/* attribution */}
					<div className="px-2">
						<p className="text-2xl text-blue-500">
							<span className="font-bold">Rebooted</span> <span>Technology</span>
						</p>
						<p className="text-lg text-gray-700">Your Field Service Command Center</p>
					</div>
					<Button
						className="w-full mt-4"
						ripple={false}
						onClick={() => {}}
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Sign In
					</Button>
					<hr className="my-6" />
					<p className="text-md text-gray-700 pl-2">GET STARTED</p>
					{
						<GetStartedValueProposition
							forWho="Individuals"
							description="Experience a new level of efficiency today with access to job details and clients, work order management, time tracking, and automatic invoicing."
							click={undefined}
						/>
					}
					{
						<GetStartedValueProposition
							forWho="Companies"
							description="Experience a new level of connectivity to company-centric field operations with incident management, maintenance requests, and collaboration."
							click={undefined}
						/>
					}
					{
						<GetStartedValueProposition
							forWho="Families"
							description="Experience a new level of realization with community wishful surveillence, servitude, and exaltation of faith and hope."
							click={undefined}
						/>
					}
				</div>
			</div>

			{/* right side */}
			<div
				className="flex-1 bg-cover bg-center hidden md:block"
				style={{ backgroundImage: `url('background.jpg')` }}
			></div>
		</div>
	)
}

export default Main
