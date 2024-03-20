
import { inputSearch, showLoader } from '../main';


export function fetchPhotoFromPixabay() {
    const inputValueForForm = inputSearch.value.trim().split(',').join('+');
    const searchParams = new URLSearchParams({
        key: "42956333-dca595600c3a5bd958b67132a",
        q: [inputValueForForm],
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });
    showLoader();
    return fetch(`https://pixabay.com/api/?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
        );
}