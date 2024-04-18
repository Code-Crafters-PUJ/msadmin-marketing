const mockData = {
  emails: {
    visualizacion: 0.65,
  },
  landingPage: {
    users: [
      { name: 'Juan Pérez', email: 'juan@example.com' },
      { name: 'María García', email: 'maria@example.com' },
      { name: 'Carlos López', email: 'carlos@example.com' },
      { name: 'Ana Martínez', email: 'ana@example.com' },
      { name: 'Pedro Rodríguez', email: 'pedro@example.com' },
      { name: 'Luisa González', email: 'luisa@example.com' },
      { name: 'Sofía Ramírez', email: 'sofia@example.com' },
      { name: 'Javier Fernández', email: 'javier@example.com' },
      { name: 'Laura Sánchez', email: 'laura@example.com' },
      { name: 'Diego Pérez', email: 'diego@example.com' },
      { name: 'Lucía Gómez', email: 'lucia@example.com' },
      { name: 'Alejandro Martín', email: 'alejandro@example.com' },
      { name: 'Valeria Ruiz', email: 'valeria@example.com' },
      { name: 'Miguel Torres', email: 'miguel@example.com' },
      { name: 'Isabella Hernández', email: 'isabella@example.com' },
      { name: 'Fernando Vargas', email: 'fernando@example.com' },
      { name: 'Gabriela Morales', email: 'gabriela@example.com' },
      { name: 'Andrés Díaz', email: 'andres@example.com' },
      { name: 'Carolina Castro', email: 'carolina@example.com' },
      { name: 'Esteban Ramírez', email: 'esteban@example.com' },
    ],
  },
  formasDeEnterarse: [
    'Redes Sociales',
    'Buscadores',
    'Recomendación de Amigos',
  ],
  historialDudas: [
    {
      id: 1,
      asunto: 'Problema con la página de inicio',
      destinatario: 'Soporte Técnico',
      descripcion:
        'Cuando intento cargar la página de inicio, muestra un error 404.',
      remitente: {
        name: 'Luisa Martínez',
        email: 'luisa@example.com',
        date: '2024/20/02',
      },
    },
    {
      id: 2,
      asunto: 'Duda sobre precios',
      destinatario: 'Ventas',
      descripcion: 'Quisiera saber cuáles son los precios de sus productos.',
      remitente: {
        name: 'Pedro Rodríguez',
        email: 'pedro@example.com',
        date: '2024/20/02',
      },
    },
  ],
}

export default mockData
