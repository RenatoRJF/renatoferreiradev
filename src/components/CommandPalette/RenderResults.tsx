import cx from "classnames";
import { useMatches, KBarResults } from "kbar";

export function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        // Handle section headers
        if (typeof item === "string") {
          return (
            <div className="px-4 py-2 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-gray-700">
              {item}
            </div>
          );
        }

        // Handle action items
        return (
          <div
            className={cx(
              "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
              {
                "bg-gray-700 text-white": active,
                "text-gray-400 hover:bg-gray-800": !active,
              }
            )}
          >
            {"icon" in item && (
              <div
                className={cx(
                  "text-white transition-transform duration-500",
                  {
                    "animate-bounce scale-120": active,
                  }
                )}
              >
                {item.icon}
              </div>
            )}

            <span>{item.name}</span>

            {"shortcut" in item && item.shortcut && (
              <div className="ml-auto flex gap-1">
                {item.shortcut.map((key, index) => (
                  <kbd
                    key={`${item.id}-${key}-${index}`}
                    className="px-1.5 py-0.5 text-xs bg-gray-600 text-gray-200 rounded"
                  >
                    {key.toUpperCase()}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
