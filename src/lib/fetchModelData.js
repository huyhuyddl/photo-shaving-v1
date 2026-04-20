const API_BASE = "http://localhost:3000";

async function fetchModel(url) {
  const response = await fetch(API_BASE + url);

  if (!response.ok) {
    throw new Error(`API lỗi: ${response.status}`);
  }

  return await response.json();
}
export default fetchModel;
