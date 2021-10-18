async function getServices() {
  const response = await fetch('/services');
  const memes = await response.json();
  if (response.ok) return memes;
  else throw response.statusText;
}

const API = { getServices };

export default API;
