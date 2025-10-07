import cx from "classnames";
import { useMatches, KBarResults } from "kbar";

export function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => (
        <div
          className={cx(
            "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors",
            {
              "bg-gray-700 text-white": active,
              "text-gray-400 hover:bg-gray-800": !active,
            }
          )}
        >
          {typeof item === "object" && (
            <>
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
                  {item.shortcut.map((key) => (
                    <kbd
                      key={key}
                      className="px-1.5 py-0.5 text-xs bg-gray-600 text-gray-200 rounded"
                    >
                      {key.toUpperCase()}
                    </kbd>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    />
  );
}
