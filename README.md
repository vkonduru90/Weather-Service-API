# Weather Service API

## Overview

Weather Service API is a TypeScript-based RESTful API for retrieving weather forecasts using the [weather.gov](https://www.weather.gov/documentation/services-web-api) OpenAPI. It provides endpoints to fetch today's weather forecast for a given latitude and longitude.

## Features

- Get today's weather forecast by coordinates
- Input validation using Zod
- Error handling middleware
- OpenAPI client code generation
- Written in TypeScript with Express

## Project Structure

```
src/
	app.ts                # Express app setup
	server.ts             # Server entry point
	controllers/
		weather.controller.ts      # Weather API logic
	routes/
		weather.router.ts          # Weather API routes
	services/
		weather.service.ts         # Weather.gov API integration
	schemas/
		weather.schema.ts          # Zod validation schemas
	middleware/
		errorHandler.ts, notFound.ts
	openapi/
		weather-api.yaml           # OpenAPI spec
		apigen.config.json         # OpenAPI generator config
		generated/                 # Generated API client code
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Clone
```bash
git clone https://github.com/vkonduru90/Weather-Service-API.git
```

### Installation

```bash
npm install
```

### Generate API Client

```bash
npm run generate:api
```

### Run in Development

```bash
npm run dev
```

### Build and Start

```bash
npm run build
npm start
```

### Design Patterns used
- Controller-Server pattern i.e `WeatherController`, `WeatherService`
- Dependency Injection i.e `WeatherController`
- Factory Pattern i.e `WeatherService`
- Validation Pattern i.e `zod`
- Singleton Pattern i.e `WeatherController`
- Middleware Pattern i.e `notFoundHandler`, `errorHandler`

### Security
- Used below packages
	- CORS
	- Express Json
	- helmet

## API Usage

### Request.http file
Install REST Client VS Code plugin and start using Rest Client in VSCode and avoid Postman.

### Health Check

`GET /health`

Returns `{ status: "ok" }` if the server is running.

### Get Today's Weather Forecast

`GET /api/v1/weather/today?latitude={lat}&longitude={lon}`

**Query Parameters:**
- `latitude` (string, required): Latitude value
- `longitude` (string, required): Longitude value

**Response:**
```
{
	"temperature": number,
	"windSpeed": string,
	"windDirection": string,
	"shortForecast": string,
	"detailedForecast": string
}
```

**Error Responses:**
- `400 Bad Request`: Validation errors
- `404 Not Found`: Location not found
- `204 No Content`: No forecast data available
- `500/502/429`: Internal or upstream errors

## Environment Variables

- `PORT`: Port to run the server (default: 3000)
- `WEATHER_BASE_URL`: Base URL for weather.gov API (default: https://api.weather.gov)

## Testing

Run unit tests with Jest:

```bash
npm test
```

## License

ISC

## Author

Venkatesh Konduru