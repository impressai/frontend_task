

const dbName = "UserDB";
const dbVersion = 1;
const storeName = "users";

function initiateDB() {
  let db;

  const request = indexedDB.open(dbName, dbVersion);

  request.onerror = (event) => {
    console.error("IndexedDB error:", event.target.error);
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    console.log("IndexedDB reasy to use!");
  };

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
      const store = db.createObjectStore(storeName, {
        keyPath: "id",
        autoIncrement: true,
      });
      store.createIndex("name", "name", { unique: false });
      store.createIndex("email", "email", { unique: true });
    }
  };

  const addUser = (user) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const emailIndex = store.index("email");
      emailIndex.get(user.email).onsuccess = (event) => {
        if (event.target.result) {
          console.error("Email already exists:", user.email);
          reject({
            success: false,
            message: `Email already exists: ${user.email}`,
          });
        } else {
          const request = store.add(user);
          request.onsuccess = (event) => {
            resolve({
              success: true,
              result: event.target.result,
            });
          };
          request.onerror = (event) => {
            reject({
              success: false,
              message: event.target.error,
            });
          };
        }
      };
    });
  };

  const getUsers = () => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };

  return { addUser, getUsers };
}

export default initiateDB;
