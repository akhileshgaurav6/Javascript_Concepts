console.log("feedback form loaded...");

// html form ko access krnA HAI

const feedbackForm = document.getElementById("feedback_form");
// const formHeading = document.getElementById("form_heading");
const formHeading = document.querySelector("#form_heading");
const clearButton = document.getElementById("clear_button");
const feedbackItemContainer = document.getElementById('feedback_item_container');


//load feedbacks

function loadFeedbacks(){

    //getting data from localStorage and parsing to array

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") ) || [];
    feedbackItemContainer.innerHTML = "";

    feedbacks.reverse();

    feedbacks.forEach((item) => {
        
        const feedItem = `<div class="list_item mt-2 p-5 flex flex-col gap-3 bg-gray-700">
                    <div class="flex justify-between">
                        <h1 class="font-bold text-3xl">${item.name}</h1>
                        <h1 class="text-gray-400 text-2xl">${item.email}</h1>
                    </div>
                    <p>
                        ${item.message}
                    </p>
                    
                    <div class='flex justify-between'>
                    
                    <h1 class="text-2xl text-gray-400">Rating : ${item.rating}</h1>

                    <div>
                        <button onclick="deleteFeedback('${item.email}')" class='px-3 py-2 bg-red-600 text-sm hover:bg-red-400 rounded'>Delete</button>
                    </div>

                    </div>
                   
                </div>`

                feedbackItemContainer.innerHTML = feedbackItemContainer.innerHTML+feedItem;
    });

}

loadFeedbacks();

//save data to local storage
function saveToLocalStorage(feedback){
    //here gettting data from localStorge and parsing it to arry
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    console.log("feedback saved");
    feedbackForm.reset();
    loadFeedbacks();
}

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(feedbackForm);


    const name = document.getElementById('name').value
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message= document.getElementById('message').value;

    const fedbackObject = {name, email, rating, message};

    

   saveToLocalStorage(fedbackObject);

});




//DOM-> Document Object Model
clearButton.addEventListener("click",() => {

    console.log("clear button clicked");
    formHeading.innerHTML = "Submit Your feedbak";
    // formHeading.style.color="red";
    // formHeading.style.backgroundColor="yellow"

    // formHeading.classList.remove("text-2xl");
    // formHeading.classList.add("text-4xl");

})

function deleteFeedback(id){
    // alert('deleting ' + id);
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    console.log(feedbacks);

    //remove the feedback of given id
    
    const newFeedbackList = feedbacks.filter((item) => {
        return item.email != id;
    });

    console.log(newFeedbackList);

    //update the new list to localstorage
    localStorage.setItem("feedbacks", JSON.stringify(newFeedbackList));

    //load the new feedbacks from localstorage to ui
    loadFeedbacks();
}