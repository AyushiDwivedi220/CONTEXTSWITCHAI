import Card from "../ui/Card";

import useSessionStore from "../../store/sessionStore";

export default function SessionCard({
  session,
}) {
  const startSession =
    useSessionStore(
      (state) => state.startSession
    );

  const stopSession =
    useSessionStore(
      (state) => state.stopSession
    );

  const deleteSession =
    useSessionStore(
      (state) => state.deleteSession
    );

  const handleStart = async () => {
    try {
      await startSession(
        session.id
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleStop = async () => {
    try {
      await stopSession(
        session.id
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSession(
        session.id
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="hover:border-zinc-700 transition">
      <div>
        <h3 className="text-xl font-semibold">
          {session.title}
        </h3>

        <p className="text-zinc-400 mt-2">
          {session.notes}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <span className="text-sm text-zinc-500">
          Status:
          {" "}
          {session.status}
        </span>

        <span className="text-sm text-zinc-500">
          Duration:
          {" "}
          {session.duration_seconds}
          {" "}
          sec
        </span>

        {session.started_at && (
          <span className="text-sm text-zinc-500">
            Started:
            {" "}
            {session.started_at}
          </span>
        )}

        {session.ended_at && (
          <span className="text-sm text-zinc-500">
            Ended:
            {" "}
            {session.ended_at}
          </span>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        {session.status ===
          "IDLE" && (
          <button
            onClick={
              handleStart
            }
            className="
              px-4
              py-2
              rounded-lg
              bg-green-500
              hover:bg-green-600
              text-white
            "
          >
            Start
          </button>
        )}

        {session.status ===
          "RUNNING" && (
          <button
            onClick={
              handleStop
            }
            className="
              px-4
              py-2
              rounded-lg
              bg-yellow-500
              hover:bg-yellow-600
              text-white
            "
          >
            Stop
          </button>
        )}

        <button
          onClick={
            handleDelete
          }
          className="
            px-4
            py-2
            rounded-lg
            bg-red-500
            hover:bg-red-600
            text-white
          "
        >
          Delete
        </button>
      </div>
    </Card>
  );
}