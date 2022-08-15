interface Itype {
  cName?: String;
  children: String;
}
const H1 = ({ children, cName = 'g' }: Itype) => {
  return <h1 className={`${cName}`}>{children}</h1>;
};

const H2 = ({ children, cName = 'g' }: Itype) => {
  return <h1 className={`${cName}`}>{children}</h1>;
};

const PTag = ({ children, cName = 'g' }: Itype) => {
  return <h1 className={`${cName}`}>{children}</h1>;
};

export { H1, H2, PTag };
