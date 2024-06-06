import axios from "axios";
import { fetchBookData } from "../api/fetch-book";
import createBookElement from "../create-element/create-book-element";

export const getInput =  (e) => {

        e.preventDefault()
        const library = document.getElementById('library')
        library.innerHTML = '';
        const inputSubjects = document.getElementById('input-subjects')
        const inputSubjectsValue = inputSubjects.value.trim().toLowerCase()

        if(!inputSubjectsValue){
                alert('Please enter a valid subject')
                return
        }

        fetchBookData(inputSubjectsValue)
        console.log(fetchBookData(inputSubjectsValue))
        inputSubjects.value = ""

}