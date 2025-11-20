import useTimer from "./useTimer";

export default function TimerStatus() {
  const { seconds, running, start, stop, reset } = useTimer();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Timer Debug Example
        </h2>

        <p className="text-xl font-bold mb-6">
          Time: <span className="text-blue-600">{seconds}s</span>
        </p>

        <p className="text-lg mb-6">
          Status:{" "}
          {running ? (
            <span className="text-green-600 font-semibold">Running</span>
          ) : (
            <span className="text-red-600 font-semibold">Stopped</span>
          )}
        </p>

        <div className="flex gap-3 justify-center">
          {!running ? (
            <button
              onClick={start}
              className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stop}
              className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition"
            >
              Stop
            </button>
          )}

          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
