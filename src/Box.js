import React from "react"
import Card from "./components/Card"

export default function Box() {
    return (
        <div className="box">
          <Card
            place="JAPAN"
            img="Images/one.png"
            name="Mount Fuji"
            date="12 Jan 2021 to 24 Jan 2021"
            text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
            <Card
            place="AUSTRALIA"
            img="Images/two.png"
            name="Sydney Opera House"
            date="27 may 2021 to 29 may 2021"
            text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />
            <Card
            place="NORWAY"
            img="Images/three.png"
            name="Geirangerfjord"
            date="12 oct 2021 to 20 oct 2021"
            text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            />
        </div>
    )
}
