import React, {useState} from 'react';
import '../../styles/voting.css'
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const VoteList = () => {
    const [election, setElection] = useState("")
    const [elections, setElections] = useState(["Harry", "Hello", "world"])

    const set = (x) => {
        setElection(x)
    }
    return(

        <div id="elections">
            <p>Elections</p>
            <hr></hr>

            <div className='election_main'>
                <div className='header text-primary text-center font-italic'>
                    <h3>ZurChemy</h3>
                    <p>Voting platform</p>
                    <hr></hr>
                 </div>
                <div className='election_list '>

                    {
                        elections.map(name => {
                            return(
                                <Link to="vote" state={{name}} onClick={() => alert(name)} className='election_item '>
                                <h4>{name}</h4>
                                <p>Description</p>
                            </Link> 
                            )
                   
                        })
                    }
                </div>

            </div>

    </div>
    )
}

export default VoteList;