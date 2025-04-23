import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Máximo de 100 solicitudes por IP
    message: "Has excedido el límite de solicitudes. Por favor intenta más tarde."
});

export default limiter