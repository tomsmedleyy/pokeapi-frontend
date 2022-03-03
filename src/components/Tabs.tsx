import React from "react";

interface Tabs {
  title: string;
  index: string;
  component: React.ReactElement;
}

interface TabsProps {
  tabs: Tabs[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selected, setSelected] = React.useState(tabs[0].index);

  const handleChange = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="w-full">
      <div className="w-full flex">
        {tabs.map((tab, key) => (
          <div
            key={key}
            onClick={() => handleChange(tab.index)}
            className={`p-transition px-4 pb-2 cursor-pointer border-b-2 ${
              selected === tab.index ? "text-blue-500 border-b-blue-500" : ""
            } hover:text-blue-500 hover:border-b-blue-500`}
          >
            {tab.title}
          </div>
        ))}
        <div className="border-b-2 flex-1" />
      </div>
      <div className="w-full px-4 pt-4">
        {tabs.filter((tab) => tab.index === selected)[0].component}
      </div>
    </div>
  );
};
