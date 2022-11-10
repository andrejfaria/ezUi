import { ReactNode } from "react";


export function List<ListItem>({
  items, render
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}

    </ul>
  )
}



function GenericTypes() {

  const data = [{
    "name": "beer",
    "producerName": "Melvin",
    "beverageName": "2x4",
    "beverageColor": "#F7E026",
    "beverageStyle": "American Imperial IPA",
    "producerLocation": "Alpine, WY",
    "abv": 9,
    "ibu": 100,
    "logo": "https://s3.amazonaws.com/digitalpourproducerlogos/552d84cc5e002c0d5c543143.png",
    "level": 40.54054054054054
  },
  {
    "name": "beer",
    "producerName": "Boss Rambler",
    "beverageName": "Pureé Vida",
    "beverageColor": "#F4F460",
    "beverageStyle": "Berliner Weisse Fruited",
    "producerLocation": "Bend, OR",
    "abv": 5,
    "ibu": null,
    "logo": "https://s3.amazonaws.com/digitalpourproducerlogos/5b663ed7352726062026e68d.png",
    "level": 21.62162162162162
  }]

  return (
    <div>
      <h2>Generic Types</h2>
      <List
        items={data}
        render={(bev) => <div>
          <img src={bev.logo}></img>
          <p>{bev.beverageStyle}</p>
          <p>{bev.level} %</p>
        </div>}
      />
    </div>
  )
}

export default GenericTypes