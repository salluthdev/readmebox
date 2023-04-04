interface SearchInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ text, setText }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="YOUR TEXT"
      value={text}
      onChange={(e) => setText(e.target.value.toUpperCase())}
      className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
    />
  );
}
