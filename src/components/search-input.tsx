interface SearchInputProps {
  textOne: string;
  setTextOne: (text: string) => void;
  textTwo: string;
  setTextTwo: (text: string) => void;
}

export default function SearchInput({
  textOne,
  setTextOne,
  textTwo,
  setTextTwo,
}: SearchInputProps) {
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
        value={textTwo}
        onChange={(e) => setTextTwo(e.target.value.toUpperCase())}
        className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
      />
    </div>
  );
}
