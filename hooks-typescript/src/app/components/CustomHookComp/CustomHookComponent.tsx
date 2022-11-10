import { useState, useEffect, useMemo } from 'react'


export interface Beverage {
  "name": string,
  "producerName": string,
  "beverageName": string,
  "beverageColor": string,
  "beverageStyle": string,
  "producerLocation": string,
  "abv": number,
  "ibu": number,
  "logo": string,
  "level": number
}


export function useFetchData(url: string): {
  data: Beverage[] | null;
  done: boolean
} {

  const [data, setData] = useState<Beverage[] | null>(null)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((d: Beverage[]) => {
        setData(d);
        setDone(true);
      })
  }, [url])

  return {
    data,
    done
  }

}



function CustomHookComponent() {

  const { data, done } = useFetchData("../taplist.json")
  const portlandBevs = useMemo(() =>
    (data || [])
      .filter(bev => bev.producerLocation
        .includes("Portland")),
    [data]
  )


  return (
    <div>
      <h2>CustomHookComponent</h2>
      {portlandBevs.length ?
        <img
          src={portlandBevs![0].logo}
          alt="Beverage logo"
        /> : 'No Portland beverages to show'
      }

      <hr></hr>
      {done ?
        <img
          src={data![0].logo}
          alt="Beverage logo"
        /> : 'No beverages to show'
      }
    </div>
  )
}

export default CustomHookComponent