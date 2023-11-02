const people = [
  {
    name: "Dog",
    type: "",
    role: "Owner",
    imageUrl:
      "https://vivirconunpodenco.files.wordpress.com/2017/12/dscn4897.jpg?w=256&h=256&crop=1",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Car",
    type: "Dacia Sandero",
    role: "Owner",
    imageUrl:
      "https://images.tagesschau.de/image/5b479805-877c-4756-918f-6dd65a4386bc/AAABiYdmUVQ/AAABibBxyuw/1x1-256/dacia-sandero-100.jpg",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function Panel() {
  return (
    <div className="absolute right-0 bg-white p-2 m-2">
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.type} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.type}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
