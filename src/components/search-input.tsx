interface SearchInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ text, setText }: SearchInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="FIRST TEXT"
        value={text}
        onChange={(e) => setText(e.target.value.toUpperCase())}
        className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
      />
      <input
        type="text"
        placeholder="SECOND TEXT"
        className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
      />
    </div>
  );
}
