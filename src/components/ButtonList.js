import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Music",
    "Cricket",
    "News",
    "Soccer",
    "Concert",
    "Kids",
    "Movies",
  ];

  return (
    <div className="flex">
      {list.map((filter) => (
        <Button key={filter} name={filter} />
      ))}
    </div>
  );
};

export default ButtonList;
