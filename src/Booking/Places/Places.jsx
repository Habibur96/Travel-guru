import React, { useEffect, useState } from "react";

import Home from "../../components/Home/Home";
import Terms from "../../components/Terms/Terms";

const Places = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/info")
      .then((res) => res.json())
      .then((data) => setInformation(data));
    // .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h3>{information.length}</h3>
      {information.map(
        (info) => (
          <h3>{info.name}</h3>
        )
        // <Terms key={info.id} info={info}></Terms>
      )}
    </div>
  );
};

export default Places;
