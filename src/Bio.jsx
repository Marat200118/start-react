export const Bio = () => {
  const bioData = {
    birthPlace: "Laarne",
    yearOfBirth: 1999,
  };

  return (
    <p
      style={{
        color: "darkblue",
        backgroundColor: "orange",
        fontWeight: "bold",
        padding: "1rem",
      }}
    >
      I was born in {bioData.yearOfBirth} and I live in {bioData.birthPlace}
    </p>
  );
};
