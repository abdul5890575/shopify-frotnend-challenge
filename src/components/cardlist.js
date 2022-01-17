import Button from "@restart/ui/esm/Button";
import Card from "react-bootstrap/Card";
export default function CardList(props) {

  let card = props.cardsData[0].map((cardData) =>
  <div className='spacing' key={cardData.title}>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={cardData.url} />
      <Card.Body >
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text style={{ height: '16rem', overflowX : 'auto'}}>
          <p> <strong>DATE :</strong>{cardData.date}</p>
          {cardData.explanation}
        </Card.Text>
        <div className="footer">
        <Button className="btn-primary spacing" onClick={()=>like(cardData.title)}>Like</Button>
        <Button className="btn-secondary spacing" onClick={()=>unlike(cardData.title)}>Unlike</Button>
        <strong className="likes">{cardData.likes}</strong>
        </div>
      </Card.Body>
    </Card>
  </div>
  )

  const like = (title) => {
    let stateToChange = {}
    for(let i=0; i < props.cardsData[0].length; i++) {
      if (props.cardsData[0][i]['title'] === title) {
        stateToChange =  props.cardsData[0][i]
        stateToChange.likes += 1
        let newState = [...props.cardsData[0]]
        newState.splice(i,1,stateToChange)
        props.setcardData([newState])

      }
    }
  }

  const unlike = (title) => {
    let stateToChange = {}
    for(let i=0; i < props.cardsData[0].length; i++) {
      if (props.cardsData[0][i]['title'] === title) {
        stateToChange =  props.cardsData[0][i]
        stateToChange.likes -= 1
        let newState = [...props.cardsData[0]]
        newState.splice(i,1,stateToChange)
        props.setcardData([newState])

      }
    }
  }

    return (
      <div className="card-container">
        {card}
      </div>
    )
}