import React, { useEffect, useState } from "react";
import classnames from "classnames";

function TabSet({ children }) {
  const [activeTab, setActiveTab] = useState(getFirstTab());

  useEffect(() => {
    setActiveTab(getFirstTab());
  }, []);

  function getFirstTab() {
    return React.Children.toArray(children)[0].props.label;
  }

  return (
    <div className="mb-2 flex flex-col">
      <ul className="mb-2">
        {React.Children.toArray(children).map(({ props }) => (
          <li
            key={props.label}
            className={classnames(
              "py-2 text-center min-w-[6rem] mr-2 border-b-4 inline-block",
              { "border-orange-500": activeTab === props.label }
            )}
          >
            <a
              href={`#${props.label}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(props.label);
              }}
            >
              {props.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-2 w-full">
        {
          React.Children.toArray(children).find(
            ({ props }) => activeTab === props.label
          ).props.children
        }
      </div>
    </div>
  );
}

function TabSheet({ children }) {
  return <div>{children}</div>;
}

export { TabSet, TabSheet };
