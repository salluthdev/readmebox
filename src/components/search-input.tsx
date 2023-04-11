interface SearchInputProps {
  textOne: string;
  setTextOne: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ textOne, setTextOne }: SearchInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="FIRST TEXT"
        value={textOne}
        onChange={(e) => setTextOne(e.target.value.toUpperCase())}
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
