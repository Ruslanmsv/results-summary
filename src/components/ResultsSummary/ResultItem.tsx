interface ResultItemProps {
  title: string;
  value: number;
  color: string;
  Icon?: React.FC;
}

export default function ResultItem({ title, value, color, Icon }: ResultItemProps) {
  // Tailwind workaround for creating dynamic classes
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  type ResultItemColorClasses = { [key: string]: { [key: string]: string } };

  const classes: ResultItemColorClasses = {
    red: {
      text: "text-red",
      bg: "bg-red",
    },
    yellow: {
      text: "text-yellow",
      bg: "bg-yellow",
    },
    green: {
      text: "text-green",
      bg: "bg-green",
    },
    blue: {
      text: "text-blue",
      bg: "bg-blue",
    },
  };

  return (
    <li className="mt-4 first:mt-6">
      <div
        className={`${classes[color].bg} flex flex-row items-center justify-start rounded-xl bg-item-gradient p-4`}
      >
        {Icon && <Icon />}
        <span className={`${classes[color].text} ml-3`}>{title}</span>
        <span className="ml-auto font-bold ">
          {value}
          <span className="opacity-50"> / 100</span>
        </span>
      </div>
    </li>
  );
}
