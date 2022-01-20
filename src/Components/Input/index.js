import {Box, Button} from '@mui/material'
import React, {useState} from 'react'
import DayDD from '../DayDD'
import ScoreDD from '../ScoreDD'
import WeekDD from '../WeekDD'
import './Input.css'
const url = process.env.REACT_APP_API_URL || 'http://localhost:3005'

function Input({userTable, name}) {
	//! make the fields required
	const [week, setWeek] = useState()
	const [day, setDay] = useState()
	const [score, setScore] = useState()

	//! Function that sends the object to server
	function onClick(event) {
		event.preventDefault()
		updateStats()
	}
	async function updateStats() {
		// event.preventDefault()
		try {
			const response = await fetch(`${url}/progress`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					week: week,
					day: day,
					score: score,
					link_id: userTable.payload[userTable.payload.length - 1].uid + 1,
				}),
			})
			const data = await response.json()
			console.log('progress data: ', data)
			console.log('progress week: ', week)
			console.log('progress day: ', day)
			console.log('progress score: ', score)

			// function that waits a second and then sends a fetch
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div>
			<Box className='input-main-div'>
				<div className='welcome-text'>
					<h1>Welcome, {name}</h1>
				</div>
				<WeekDD setWeek={setWeek} />
				<DayDD setDay={setDay} />
				<ScoreDD setScore={setScore} />
				<Button onClick={onClick} variant='text'>
					Submit
				</Button>
			</Box>
		</div>
	)
}

export default Input
