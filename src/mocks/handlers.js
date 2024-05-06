// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { generateRandomName } from './utils'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/user', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      firstName: generateRandomName(),
      lastName: generateRandomName(),
    })
  }),
]
