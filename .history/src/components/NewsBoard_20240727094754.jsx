useEffect(() => {
  setLoading(true);
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setArticles(data.articles || []); // Fallback to an empty array if articles is undefined
      setLoading(false);
    })
    .catch((error) => {
      console.error("Fetching error: ", error);
      setLoading(false);
    });
}, [category]);
