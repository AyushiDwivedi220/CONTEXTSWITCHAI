export default function Button({ children }) {
    return (
      <button className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-xl font-medium">
        {children}
      </button>
    );
  }