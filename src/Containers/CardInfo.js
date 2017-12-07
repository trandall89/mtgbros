import  React, { Component } from 'react'
import '../css/CardInfo.css'
import { cards } from '../data/LEA-x.json'
import Property from '../Components/Property'

export class CardInfo extends Component {
    
    render() {
        return (
                <div> 
                    <div id="card-name">
                        <h1>Abbey Gargoyles</h1>
                    </div>
                    <div id="card-info" className="clearfix">
                        <Property label="Card Name:"
                                 value="Abbey Gargoyles"     />
                        <Property label="Mana Cost:"
                                 value="2 W W W"     /> 
                        <Property label="Converted Mana Cost:"
                                value=" 5" />
                        
                        <Property label="Converted Mana Cost:"
                                 value="5"     />
                                 
                        <Property label="Types:" 
                                    value="Creature - Gargoyle" />
                        <Property label="Card Text: " 
                                    value="Flying, protection from red" />
                        <Property label="Flavor Text: " 
                                    value={<i>"Though Serra has not been seen for twenty years, her gargoyles still watch over our city and punish the guilty."
                                —Gulsen, abbey matron</i>} />
                        <Property label="P/T: " 
                                    value="3 / 4" />
                        <Property label="Expansion:"
                                 value="Masters Edition II"     />
                        <Property label="Rarity:"
                                 value="Uncommon"     />
                        <Property label="All Sets: " 
                                  value="5ED, HML, ME2" />
                        <Property label="Card Number:"
                                  value="1" />
                        <Property label="Artist:" 
                                  value="Christopher Rush" />
                </div>{/* card info */}
            </div> // wrapper div
        )
    }
}

export default CardInfo