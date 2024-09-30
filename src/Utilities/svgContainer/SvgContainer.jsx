import styles from "./SvgContainer.module.css";
const SvgContainer = ({ svgUrl }) => {
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

export default SvgContainer;
