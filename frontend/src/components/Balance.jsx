export function Balance({ value }) {
  return (
    <div className="flex p-10">
      <div className="text-lg font-bold">Your balance</div>
      <div className="text-lg font-semibold ml-4">Rs {value}</div>
    </div>
  );
}
