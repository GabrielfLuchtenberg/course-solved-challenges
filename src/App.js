import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.github.com/users/GLuchtenberg/repos");
      setRepos(response.data);
    }
    fetchData();
  }, [repos]);
  return (
    <div>
      {repos.map(repo => (
        <h1 key={repo.id}>{repo.name}</h1>
      ))}
    </div>
  );
}

export default App;
