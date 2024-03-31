import React from "react"

import { useGetHealthCheckQuery } from "./api/rebootedApi"
import LoadingPage from "./LoadingPage"
import { useAppSelector } from "./redux/hooks"
import { selectServerAvailable, selectServerLoading } from "./api/rebootedSlice"
import Main from "./layouts/Main"

function App() {
	const serverLoading = useAppSelector(selectServerLoading)
	const serverAvailable = useAppSelector(selectServerAvailable)

	useGetHealthCheckQuery()

	if (serverLoading) {
		return <LoadingPage />
	}

	return (
		<>
			{serverAvailable ?
				<Main />
			:	<h1 className="text-3xl font-bold underline">Offline</h1>}
		</>
	)
}

export default App
