export const Bio = (props) => {
  return (
    <p
      style={{
        color: "darkgrey",
        backgroundColor: "paleturquoise",
        fontWeight: "bold",
        padding: "0.3rem",
      }}
    >
      I was born in {props.yearOfBirth} and I live in {props.birthPlace}
    </p>
  );
};
