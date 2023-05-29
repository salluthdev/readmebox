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
      placeholder: "YOUR NAME",
      state: textOne,
      setState: setTextOne,
    },
    {
      placeholder: "YOUR TITLE",
      state: textTwo,
      setState: setTextTwo,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (text: string) => void
  ) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-zA-Z]/g, "");
    setState(filteredValue.toUpperCase());
  };

  return (
    <div className="flex items-center gap-2">
      {inputList.map((input) => {
        return (
          <input
            key={input.placeholder}
            type="text"
            placeholder={input.placeholder}
            value={input.state}
            onChange={(e) => handleInputChange(e, input.setState)}
            className="w-full h-10 font-bold rounded-sm outline-none py-1 px-2 mt-1"
          />
        );
      })}
    </div>
  );
}
