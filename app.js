const express = require('express');
const morgan = require('morgan'); 
const cors = require('cors')

const AppError = require('./utils/AppError');
const globalAppError = require('./controllers/errorController');

const healthRouter = require('./routes/healthcheckRoutes');
const dataRouter = require('./routes/audrinoRoutes');
const companyRouter = require('./routes/companyRoutes');
const automobileRouter = require('./routes/automobileRoutes');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Route handlers
app.use('/api/v1/health-check', healthRouter); // Route mounting
app.use('/api/v1/data', dataRouter);
app.use('/api/v1/company', companyRouter);
app.use('/api/v1/automobile', automobileRouter);

// Undefined api access
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

// Middleware call for global error handler
app.use(globalAppError)

module.exports = app;