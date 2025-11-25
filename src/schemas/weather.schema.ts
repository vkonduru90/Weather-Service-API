import { z } from 'zod';

export const todayForecastQuerySchema = z.object({
  latitude: z
    .string()
    .nonempty({ message: 'Latitude is required' })
    .refine((val) => !isNaN(parseFloat(val)), { message: 'Latitude must be a number' }),
  longitude: z
    .string()
    .nonempty({ message: 'Longitude is required' })
    .refine((val) => !isNaN(parseFloat(val)), { message: 'Longitude must be a number' }),
});

export type TodayForecastQuery = z.infer<typeof todayForecastQuerySchema>;
