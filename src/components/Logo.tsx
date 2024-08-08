import styles from "./Logo.module.css";
interface ILogoProps {
  logo: string;
  url: string;
  customClass?: string;
  alt: string;
  shouldRotate?: boolean;
}

export function Logo({
  logo,
  url,
  customClass,
  alt,
  shouldRotate = false,
}: ILogoProps) {
  let finalClassList = customClass ? `${styles.logo} ${customClass}` : `${styles.logo}`;
  finalClassList = shouldRotate ? `${finalClassList} rotate` : finalClassList;
  return (
    <a href={url} target="_blank">
      <img src={logo} className={finalClassList} alt={alt} />
    </a>
  );
}
