interface ImgProps {
  classNames?: string;
  stroke?: string;
  title?: string;
  'data-testid'?: string;
}
export const Img = ({ classNames, stroke = 'rgb(0, 0, 0)', title, ...props }: ImgProps) => {
  return (
    <svg
      role="img"
      aria-label="[title]"
      preserveAspectRatio="none"
      viewBox="122.131 82.699 132.305 132.305"
      width="132.305"
      height="132.305"
      className={classNames}
      data-testid={props['data-testid']}
    >
      <title>{title}</title>
      <rect x="122.131" y="82.699" width="132.305" height="132.305" style={{ fill: 'rgba(0, 0, 0, 0)', stroke: stroke }}></rect>
      <path style={{ fill: 'rgb(216, 216, 216)', stroke: stroke }} d="M 122.254 82.839 L 254.252 214.679"></path>
      <path
        style={{ fill: 'rgb(216, 216, 216)', stroke: stroke }}
        d="M 254.147 83.291 L 122.254 214.599"
        transform="matrix(1, -0.000393, 0.000393, 1, -0.058496, 0.073866)"
      ></path>
    </svg>
  );
};
