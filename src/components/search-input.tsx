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
  const inputList = [
    {
      placeholder: "FIRST TEXT",
      state: textOne,
      setState: setTextOne,
    },
    {
      placeholder: "SECOND TEXT",
      state: textTwo,
      setState: setTextTwo,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {inputList.map((input) => {
        return (
          <input
            key={input.placeholder}
            type="text"
            placeholder={input.placeholder}
            value={input.state}
            onChange={(e) => input.setState(e.target.value.toUpperCase())}
            className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
          />
        );
      })}
    </div>
  );
}
