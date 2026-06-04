import { useState } from "react";

import useSessionStore from "../../store/sessionStore";

export default function CreateSessionForm() {
  const createSession =
    useSessionStore(
      (state) => state.createSession
    );

  const [title, setTitle] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await createSession({
        title,
        notes,
      });

      setTitle("");
      setNotes("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8"
    >
      <input
        type="text"
        placeholder="Session title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
        className="
          w-full
          p-3
          rounded-lg
          bg-zinc-800
          mb-3
        "
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) =>
          setNotes(
            e.target.value
          )
        }
        className="
          w-full
          p-3
          rounded-lg
          bg-zinc-800
          mb-3
        "
      />

      <button
        type="submit"
        className="
          px-4
          py-2
          bg-blue-500
          rounded-lg
          text-white
        "
      >
        Create Session
      </button>
    </form>
  );
}