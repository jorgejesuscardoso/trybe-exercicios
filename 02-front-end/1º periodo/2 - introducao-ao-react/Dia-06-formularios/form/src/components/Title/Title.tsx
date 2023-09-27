import './title.css';

type TitleProps = {
    children: React.ReactNode;
}
export function Title({ children }: TitleProps) {
    
  return <h2 className="title">{children}</h2>;
}