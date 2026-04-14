export default function Button({children, link}) {
  return (
    <a 
    href={link}
    target="_blank"
    >
    <div className="flex flex-row justify-start items-center gap-1.5">
      <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
        [
      </p>
      <div>
        <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
          {children}
        </p>
      </div>
      <p className="font-primary font-body-secondary text-b-l leading-tightest uppercase">
        ]
      </p>
    </div>
    </a>
  );
}
