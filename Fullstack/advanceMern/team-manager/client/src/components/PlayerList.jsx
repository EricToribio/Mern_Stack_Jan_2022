
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const PlayersList = () => {
    const [ players, setPlayers] = useState([])
    const history = useHistory()
    const [deleteData , setDeleteData] = useState()
    const removeFromDom = playerId => {
        setPlayers(players.filter(players => players._id != playerId))
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/team')
        .then(response => {
            setPlayers(response.data.Team)
        } ).catch(err => {
            console.log(err)
        })
    },[deleteData])
    
    return(
        
            <table className="table table-striped border mt-3">
                <thead>
                    <tr>
                        <th>Players Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {
                players.map((player, i) => {
                    return (
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td><DeleteButton playerId={player._id} 
                            successCallback={()=>removeFromDom(player._id)}/></td>

                        </tr>
                        
                    
                    
                )})
            }
            </tbody>
            </table>
    )
        }
export default PlayersList