type ArrowIconProps = {
  className?: string;
};

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg className={className} width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ArrowIcon;