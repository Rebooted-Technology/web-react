import React from 'react';
import { useAppSelector } from '../lib/redux/hooks';
import { selectServerAvailable, selectServerLoading } from '../lib/api/rebootedSlice';
import { useGetHealthCheckQuery } from '../lib/api/rebootedApi';
import LoadingPage from './LoadingPage';

function App() {
  const serverLoading = useAppSelector(selectServerLoading)
  const serverAvailable = useAppSelector(selectServerAvailable)

  useGetHealthCheckQuery()

  if (serverLoading) {
    return (
      <LoadingPage />
    )
  }

  return (
    <>
      {serverAvailable ? (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      ) : (
        <h1 className="text-3xl font-bold underline">
          Offline
        </h1>
      )}
    </>
  );
}

export default App;