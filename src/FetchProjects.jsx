import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "h9f9tze1kmkz",
  environment: "master",
  accessToken: "1NQdrE1R3-_o6acQR4a8kOCJF17IBRuQSC0n3De3IQE",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

