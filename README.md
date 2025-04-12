# 🚀 Apollo Chat

**Apollo Chat** es una aplicación de chat en tiempo real construida con **React**, **Apollo Client/Server**, **GraphQL**, y **WebSockets**. Permite a múltiples usuarios conectarse con un apodo y enviar mensajes instantáneamente a un canal general.

---

## 🧩 Tecnologías principales

- **Frontend**: React + Vite + Apollo Client + Material UI
- **Backend**: Apollo Server + GraphQL + graphql-ws + Express
- **Comunicación**: GraphQL Subscriptions vía WebSockets
- **Estilo**: Material UI

---

## 🌐 Demo en vivo

## 📐 Estructura del proyecto

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/RealTimeChat-App.git
cd RealTimeChat-App
```

### 2. Iniciar el SERVER

```bash
cd server
yarn install
yarn start
```

El servidor corre en http://localhost:4000/graphql con soporte para WebSocket.

### 2. Iniciar el CLIENT

```bash
cd client
yarn install
yarn dev
```

El cliente corre en http://localhost:5173 por defecto.
