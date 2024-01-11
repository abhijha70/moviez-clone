import Box from "./Box";

// Results.js
const Results = ({ movies }) => {
    const boxes = movies.map((item, index) => (
      <Box
        key={index}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    ));
  
    return <div className="w-full grid gap-5 md:grid-cols-4">{boxes}</div>;
  };
  
  export default Results;
  
  
  
