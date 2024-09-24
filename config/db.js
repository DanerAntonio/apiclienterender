// Conectar a MongoDB (sin las opciones deprecadas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
      console.error('MongoDB connection error:', err.message);
      process.exit(1); // Cerrar la aplicación si falla la conexión
  });
