import { FC } from "react";

interface ListItem {
  title: string;
  content: string;
}

interface CardSectionWidgetProps {
  section_title: string;
  items: ListItem[];
}

const CardSectionWidget: FC<CardSectionWidgetProps> = ({
  section_title,
  items,
}) => {
  return (
    <div className="flex flex-col bg-cardcol rounded-2xl shadow-md p-4">
      <p className="text-lg font-semibold mb-2">{section_title}</p>
      {items.map((item, index) => (
        <div key={index} className="pl-4">
          <p className="mb-2">{item.title}</p>
          <p className="text-gray-500 whitespace-pre-line">
            {item.content}
          </p>
          {index < items.length - 1 && <hr className="my-4 border-gray-300" />}
        </div>
      ))}
    </div>
  );
};

export default CardSectionWidget;
