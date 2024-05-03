export const getHourlyData = async ({
    lat,
    lon,
  }: {
    lat: string
    lon: string
  }) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
      {
        method: "GET",
        next: {
          revalidate: 60000,
        },
      }
    )
    if (!data.ok) {
      throw new Error("Failed to fetch data")
    }
  
    return data.json()
  }