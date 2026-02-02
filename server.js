io.on('connection', (socket) => {
  // Handles text
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handles files
  socket.on('upload', (data) => {
    // We broadcast the object containing the Base64 string and file type
    io.emit('chat message', data);
  });
});