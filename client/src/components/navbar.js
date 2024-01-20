export default function Navbar() {
  return (
    <div className="flex justify-between border-b px-4 py-2 shadow-sm">
      <img
        className="h-12 self-center"
        src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/espn_fantasy_football_logo-freelogovectors.net_.png"
        alt=""
      />

      <div className="inline-flex items-center gap-3 self-center">
        <span className="h-10 w-10 self-center rounded-full bg-gray-200"></span>
        <div className="flex-1 text-sm">
          <div className="font-semibold">John Doe</div>
          <div className="text-gray-600">doe@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
