import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import impact1 from '../images/impact1.png'
import impact2 from '../images/impact2.png'
import impact3 from '../images/impact3.png'


const CardDesc = () => {
    return (
        <div className="container">
           <CardDeck>
  <Card>
    <Card.Img variant="top" src={impact1} />
    <Card.Body>
      <Card.Title>the impact of ifresni on the amount of waste </Card.Title>
      <Card.Text>
      A single Tunisian's daily waste is about 0.815 kg per day ; our aim is to reduce it by 20 % reaching at least 0.5 kg per day.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={impact3} />
    <Card.Body>
      <Card.Title> waste gategories</Card.Title>
      <Card.Text>
      waste gategories : since our job is to help you seperate daily waste , let's have a look first at its  distribution :
Plastic : takes the biggest part by 42.3 %  and it is highly dangerous because it takes at least 450 years to decompose
Organic: 23% of waste , it is not dangerous since it is easy to recycle and decomposes quickly
Paper : 15.4% , 20 years to decompose and is made out of trees so we're losing trees as well
Metal: 11.5% , not a threat because it is easily recycled
Batteries: even though they are only 7.7% of our waste they are the most dangerous because they leak their toxins into landfills
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={impact2} />
    <Card.Body>
      <Card.Title>waste rate</Card.Title>
      <Card.Text>
      waste rate: in 2014 waste reached up to 2.5 million tons , and these numbers are increasing significantly by 2.5 %
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    )
}

export default CardDesc
