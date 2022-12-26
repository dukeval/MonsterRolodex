import Card from "../card/card.component";
import "./card-list.style.css";

const CardList=({ listToDisplay })=> (
            <div className="card-list" >
                {listToDisplay.map(item =>{
                    return <Card monster={item}/>;                  
            })}
       
        </div>
)

export default CardList;