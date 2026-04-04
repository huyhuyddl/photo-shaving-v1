/**
 * fetchModelData.js - Phiên bản cho CodeSandbox (không cần server)
 * Nếu muốn chạy với server thật (node server.js):
 *   1. Chạy: node server.js
 *   2. Thay nội dung file này bằng fetchModelData.server.js
 */

import models from "../modelData/models";

function fetchModel(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url === "/user/list") {
        resolve(models.userListModel());
        return;
      }

      const userMatch = url.match(/^\/user\/([^/]+)$/);
      if (userMatch) {
        resolve(models.userModel(userMatch[1]));
        return;
      }

      const photoMatch = url.match(/^\/photosOfUser\/([^/]+)$/);
      if (photoMatch) {
        resolve(models.photoOfUserModel(photoMatch[1]));
        return;
      }

      if (url === "/test/info") {
        resolve(models.schemaInfo());
        return;
      }

      resolve(null);
    }, 100);
  });
}

export default fetchModel;
