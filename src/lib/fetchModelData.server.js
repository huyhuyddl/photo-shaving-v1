// Dùng file này khi chạy local với server thật (node server.js)
// Thay thế fetchModelData.js bằng file này nếu cần

function fetchModel(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! status: ${response.status}`));
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

export default fetchModel;
