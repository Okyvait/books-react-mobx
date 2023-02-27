interface ImgProps {
  classNames?: string;
  stroke?: string;
}
export const Img = ({ classNames, stroke = 'rgb(0, 0, 0)' }: ImgProps) => {
  return (
    <svg preserveAspectRatio="none" viewBox="122.131 82.699 132.305 132.305" width="132.305" height="132.305" className={classNames}>
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
