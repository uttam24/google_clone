import React,{useState} from 'react';
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import axios from "axios";
import {key, cx } from "../API"
import Show from "./Show";

const Search =(props)=>{
	const[state, setState] = useState(props.location.state ? props.location.state : "");
	const[results, setResults] = useState([]);
	const[info, setInfo] = useState('');
	const goBack =()=>{
		props.history.push('/');
	}
	const searchGoogle  = async (e)=>{
		e.preventDefault();
		try{
			const response = await axios.get(
				`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
				);
			if(response){
				setResults(response.data.items);
				setInfo(response.data.searchInformation);
			}
		} catch(error){
			console.log(error);
		}
	};
	React.useEffect(()=>{
	  async function getPosts(){
	 	if(props.location.state){
	 		try{
			const response = await axios.get(
				`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
				);
			if(response){
				setResults(response.data.items);
				setInfo(response.data.searchInformation);
			}
		  } catch(error){
			console.log(error);
	      }
	 	}
	 }
	 getPosts()
	}, [])
	return(
		  <div className="search">
		  	<div className="search_form">
		  		<div className="search__form-logo">
		  			<img src="/images/Google_2015_logo.svg.webp" alt="google" onClick={goBack}/>
		  		</div>
		  		<div className="search__form-input">
		  			<form className="home__form" onSubmit={searchGoogle}>
						<input type="text" className="home__input" value={state} onChange={(e)=>setState(e.target.value)} required/>
						<FaSistrix className="search__icon"/>
						<FaMicrophone className="microphone"/>
				</form>
		  		</div>
		  	 </div>
		  	<Show results={results} info={info} />
		  </div>
		)
}
export default Search