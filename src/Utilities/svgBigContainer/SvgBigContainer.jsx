import styles from "./SvgBigContainer.module.css";
const SvgBigContainer = ({ svgUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${svgUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // width: "465px",
        // height: "417px",
      }}
      className={styles.background}
    />
  );
};

export default SvgBigContainer;
