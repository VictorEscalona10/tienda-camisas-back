const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message || 'Error interno del servidor'
    });
};

export default errorHandler