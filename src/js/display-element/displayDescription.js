import { fetchDescription } from "../api/fetch-description"
import axios from "axios"
import { get } from "lodash"

export default async function displayBookDescription () {
    try{

        const descriptionBtn = document.querySelectorAll('.description-btn')
        const descriptionContainer = document.getElementById('description-container')
        const descriptionText = document.querySelector('.description-text')
        const closeDialogBtn = document.getElementById('close-dialog-btn')

        descriptionBtn.forEach((button) => {
            button.addEventListener('click', async (e) => {
                const bookDiv = e.target.closest('.book-div')
                const key = bookDiv.dataset.key
                try{

                    const description = await fetchDescription(key)
                    descriptionContainer.showModal()
                    descriptionText.textContent = description
                } catch (err){
                    console.error(err)
                }
            });

        });
        closeDialogBtn.addEventListener('click', () => {
            descriptionContainer.close();
        });
    } catch (err){
        console.error(err)
    }
}
