export default function Title({ title }) {
  return (
    <p
      style={{
        marginTop: "4.5rem",
        color: "white",
        background: "var(--second-color)",
        textAlign: "center",
        fontSize: "2.3rem",
        fontWeight: 700,
        paddingTop: "0.4rem",
        paddingBottom: "0.3rem",
        marginBottom: "2rem",
      }}
    >
      {title}
    </p>
  );
}
