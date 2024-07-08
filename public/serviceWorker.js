// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/socket.io')) {
      event.respondWith(
        new Response(JSON.stringify({ message: 'Mock response' }), {
          headers: { 'Content-Type': 'application/json' },
        })
      );
    }
});
      