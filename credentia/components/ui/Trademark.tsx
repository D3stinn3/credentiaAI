type TrademarkProps = {
  name: string;
  className?: string;
};

export function Trademark({ name, className = "" }: TrademarkProps) {
  return (
    <span className={className}>
      {name}
      <sup className="ml-0.5 text-[0.55em] font-normal opacity-80">™</sup>
    </span>
  );
}
