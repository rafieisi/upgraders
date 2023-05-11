import React, { useEffect, useState } from "react";
import classnames from "classnames";

function TabSet({ children, onChange }) {
  const [activeTab, setActiveTab] = useState(getFirstTab());

  useEffect(() => {
    setActiveTab(getFirstTab());
  }, []);

  function getFirstTab() {
    return React.Children.toArray(children)[0].props.label;
  }

  return (
    <div className="mb-2 flex flex-col w-full">
      <ul className="bg-orange-600 w-full  rounded-t-md">
        {React.Children.toArray(children).map(({ props }) => (
          <li
            key={props.label}
            className={classnames(
              "py-2 text-center min-w-[6rem] mr-2 text-white inline-block",
              { "bg-white text-orange-700 pt-1 rounded-t-lg": activeTab === props.label }
            )}
          >
            <a
              href={`#${props.label}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(props.label);
                onChange(props.label);
              }}
              class={activeTab===props.label?"text-gray-950":"text-white"}
            >
              {props.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-2 px-7 w-full">
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
