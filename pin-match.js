//global variable 
let saveRandomNumber;

//Function Creating For Generate Four Digit Random Number
function showRandomFourDigit(){
    //Generate 4 random numbers from 0-9
    var digits = '0123456789';
    var otpLength = 4; //Size Of Random Digit
    var otp = '';

    for(let i=1; i<=otpLength; i++){
        
        var index = Math.floor(Math.random()*(digits.length));
        otp += digits[index];
    }

    //Saving This Random Number At Global Variable
    saveRandomNumber = otp;
    //Selecting Input Area 
    var selectingRandomsInputArea=document.getElementById('showRandomDigit');
    //Assigning The Value And Showing It In Input Area
    selectingRandomsInputArea.value=saveRandomNumber;
}

//Getter And Setter Function For Operator
function getOperators(inputOperators){
    var selectingSubmitInputArea = document.getElementById('showingNumbers');
    
    //Checking Condition Which Is Came From Onlick Event
    if(inputOperators=='C'){ 
        selectingSubmitInputArea.value='';//Text Clear
    }
    else if(inputOperators=='<'){
        let back=selectingSubmitInputArea.value;
        selectingSubmitInputArea.value=back.substring(0,back.length-1);//Deleting Last String
    }
    else{
        selectingSubmitInputArea.value+=inputOperators;
    }
}

function submitting(){
        var takingNumberFromSubmitArea=document.getElementById('showingNumbers');

        if(takingNumberFromSubmitArea.value==saveRandomNumber)
        {
            var SuccessNotify = document.getElementById('pin-match');
            SuccessNotify.style.display="block";
            reloadWindow(1500);
        }
        else
        {
            var UnSuccessNotify = document.getElementById('pin-dontMatch');
            UnSuccessNotify.style.display="block";
            var takingAction=document.getElementById('count').innerText;
            let takingActionNumber = parseInt(takingAction);//converting String To Integer
            takingActionNumber-=1;
            document.getElementById('count').innerHTML=takingActionNumber;
            takingNumberFromSubmitArea.value='';

            if(takingActionNumber==0)
            {
                reloadWindow(500);//when 3 attempt will done page will reload automatically
            }
        }
}
//Window Reloader Function
function reloadWindow(DelayTime)
{
    setTimeout(function(){window.location.reload();},DelayTime);//1000ms=1sec
}