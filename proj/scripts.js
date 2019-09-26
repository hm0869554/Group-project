function Send(frm)
{
    var isValidArray = [true, true, true, true];
    var regexName = /^[a-zA-Z ]{2,30}$/;
    var regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var regexEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if(regexName.test(frm.name.value) == false)
    {
        frm.name.style.backgroundColor = "red";
        isValidArray[0] = false;
    } else{ frm.name.style.backgroundColor = "white"; }

    if(regexEmail.test(frm.email.value) == false)
    {
        frm.email.style.backgroundColor = "red";
        isValidArray[1] = false;
    } else{ frm.email.style.backgroundColor = "white"; }

    if(regexPhone.test(frm.phoneNumber.value) == false)
    {
        frm.phnNum.style.backgroundColor = "red";
        isValidArray[2] = false;
    } else{ frm.phnNum.style.backgroundColor = "white"; }

    if(frm.message.value == "")
    {
        frm.message.style.backgroundColor = "red";
        isValidArray[3] = false;
    } else{ frm.message.style.backgroundColor = "white"; }

}