export const StageInfoText = (props: {
  isWhiteText: boolean;
  title: string;
}) => {
  return (
    <h1 className="text-2xl font-tkt-medium">
      <span
        className={`${props.isWhiteText ? "text-var-white" : "text-var-red"}`}
      >
        {props.title}
      </span>
    </h1>
  );
};
