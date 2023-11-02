export default function Panel({ mapRef, markers, onSelectMarker }) {
  if (!mapRef) return null;

  return (
    <div className="absolute right-0 bg-white p-2 m-2 hover:cursor-pointer">
      <ul role="list" className="divide-y divide-gray-100">
        {markers.map((marker) => (
          <li
            key={marker.type}
            className="flex justify-between gap-x-6 py-5"
            onClick={() => onSelectMarker(marker)}
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={marker.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {marker.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {marker.type}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{marker.role}</p>
              {marker.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={marker.lastSeenDateTime}>
                    {marker.lastSeen}
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
