// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import initiateDB from "../db/initDB";

const { addUser, getUsers } = initiateDB();

export const handlers = [
  http.get("http://example.com/users", async () => {
    const users = await getUsers();
    return HttpResponse.json(users);
  }),

  http.post("http://example.com/user", async ({ request }) => {
    const newUser = await request.json();
    const resp = await addUser(newUser);
    return HttpResponse.json(resp);
  }),
];
