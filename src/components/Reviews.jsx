import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Example from "./Example.jsx";
import ReactDOM from 'react-dom';

const Gallery = () => {

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img src={require('./img/wow4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow5.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
    </AliceCarousel>
  )
}


class Reviews extends React.Component {
  state = {
    comments: [
      {id: 1, name:"Gökhan", content: "first comment"},
      {id: 2, name:"Gökhan", content: "second"},
    ],
    temp: [
      {id:0,name:"d",content:"f"},
    ],
  }

  commentsview = this.state.comments.map(comment => {
    return (
      <div className="container" key={comment.id}>
      <span onClick={() => {
        console.log(comment.id);
        var comments = this.state.comments.filter(commentt => {
          return comment.id !== commentt.id
        });
        this.setState({
          comments
        })
      }}>
        <div className="container bg-warning">
          <h6>{comment.name}:</h6>
          <p className="card-text bg-secondary text-white">{comment.content}</p>
          <br/>
        </div>
      </span>
      </div>
    )
  })

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }

  render(){
  return (

      <div className="container">
        <br/>
         <div className="d-flex justify-content-center">
           <h1 className="text-secondary float-none"><strong>Professional Reviews</strong></h1>
         </div><br/>



       <div className="container">
         <div className="card bg-warning">
         <div className="card-body text-secondary">
           <h4 className="card-title"><strong>World Of Warcraft</strong></h4>
           <Gallery />
           <p className="card-text">
           Azeroth has six major population centers, of which three are controlled by the Horde faction. Established by the united tribes of the once nomadic Tauren to serve as a hub for traders and artisans, the city of Thunder Bluff consists of tents, spirit lodges, longhouses and colorfully painted totems. Built atop a series of rises that soar from the lush grasslands below, it is also a secure, peaceful refuge for the bull-like race and its allies. To the east, Orgrimmar was founded to be the capital of the ferocious Orcs' new homeland. It stands within a sprawling canyon, behind the protection of massive, seemingly impenetrable walls. Across the sea in the Eastern Kingdoms, a maze of crypts, catacombs, tombs and passages bears the name The Undercity. Principally inhabited by the Undead, it lies below the ruined Human community of Lordaeron.
           <span id="dots">...</span><Example /></p>
         </div>
         </div><br/><br/>
         </div>

         <div className="container">
           <div className="card bg-warning">
           <div className="card-body text-secondary">
             <h4 className="card-title"><strong>Write a comment</strong></h4>
             <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Your name" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="secondary text-white" type="submit">Submit</Button>
            </Form>


           <p className="card-text"></p>
           </div>
           </div><br/><br/>
           </div>

                  <div className="container">
                    <div className="card bg-warning">
                    <div className="card-body text-secondary">
                      <h4 className="card-title"><strong>Comments</strong></h4>
                      <p className="card-text" id="myp">{this.commentsview}</p>
                    </div>
                    </div><br/><br/>
                    </div>


    </div>
  )};
}

export default Reviews;
