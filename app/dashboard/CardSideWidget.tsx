import { FC } from "react";

interface SideListItem {
  title: string;
  content: string;
}

interface CardSideWidgetProps {
  items: SideListItem[];
}

const CardSideWidget: FC<CardSideWidgetProps> = ({ items }) => {
  return (
    <div className="flex flex-col bg-cardcol rounded-2xl shadow-md p-4">
      {items.map((item, index) => (
        <div key={index}>
          <h2 className="font-semibold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-500 whitespace-pre-line">{item.content}</p>
          {index < items.length - 1 && <hr className="my-4 border-gray-300" />}
        </div>
      ))}
    </div>
  );
};

export default CardSideWidget;
