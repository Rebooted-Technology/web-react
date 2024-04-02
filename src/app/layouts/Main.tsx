import { Button } from "@material-tailwind/react"
import { useState } from "react"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"

interface GetStartedValuePropositionProps {
	forWho: string
	description: string
}

const GetStartedValueProposition: React.FC<GetStartedValuePropositionProps> = ({
	forWho,
	description,
}) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			className="border-none border-2 rounded-md p-2 text-gray-800 hover:bg-blue-50 hover:cursor-pointer active:bg-blue-100"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex flex-row flex-nowrap">
				<div className="flex-auto grow">
					<p className="text-2xl">
						<span>For</span> <span className="font-bold">{forWho}</span>
					</p>
					<p className="text-sm">{description}</p>
				</div>
				<div
					className={`flex-none grow-0 flex items-center w-6 ml-2 ${
						isHovered ? "opacity-80" : "opacity-30"
					}`}
				>
					<img
						src="icons/chevron_large_right.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

function Home() {
	return (
		<>
			<p className="text-md text-gray-700 pl-2">GET STARTED</p>

			{
				<Link to="register/technician">
					<GetStartedValueProposition
						forWho="Individuals"
						description="Experience a new level of efficiency today with access to job details and clients, work order management, time tracking, and automatic invoicing."
					/>
				</Link>
			}
			{
				<Link to="register/company">
					<GetStartedValueProposition
						forWho="Companies"
						description="Experience a new level of connectivity to company-centric field operations with incident management, maintenance requests, and collaboration."
					/>
				</Link>
			}

			<Link to="login">
				<Button
					className="w-full mt-6"
					ripple={false}
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Sign In
				</Button>
			</Link>
		</>
	)
}

function Login() {
	return (
		<>
			<h1>LOGIN</h1>
		</>
	)
}

function Register() {
	return (
		<>
			<h1>REGISTER</h1>
		</>
	)
}

function Layout() {
	return (
		<div className="flex h-screen">
			<div className="flex-1 flex justify-center bg-gray-100">
				<div className="max-w-xl w-full p-6 bg-white rounded-none shadow-md">
					<div className="px-2">
						<p className="text-2xl text-blue-500">
							<span className="font-bold">Rebooted</span> <span>Technology</span>
						</p>
						<p className="text-lg text-gray-700">Your Field Service Command Center</p>
					</div>
					<hr className="my-6" />
					<Outlet />
				</div>
			</div>
			<div
				className="flex-1 bg-cover bg-center hidden lg:block"
				style={{ backgroundImage: `url('background.jpg')` }}
			></div>
		</div>
	)
}

const Main: React.FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="register/technician"
					element={<Register />}
				/>
				<Route
					path="register/company"
					element={<Register />}
				/>
			</Route>
		</Routes>
	)
}

export default Main
