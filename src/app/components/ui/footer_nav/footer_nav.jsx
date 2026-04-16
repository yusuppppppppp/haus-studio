export default function Footer_nav({ children, footer_nav_link }) {
  return (
    <a href={footer_nav_link}>
      <p className="font-secondary font-body-primary text-b-s leading-tightest uppercase w-full text-end">
        {children}
      </p>
    </a>
  );
}
