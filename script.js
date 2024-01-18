var btn = document.getElementById("btn");



const publicKey = "vJmuePuDbd3T24u74"; // Barr
const serviceKey = "service_16i2aui"; // Barr
const templateID = "template_bjqrezb"; // Barr



// const publicKey = "_ZoMhX6KRGgZXp1eK"; //Ethan
// const serviceKey = "service_ypf56yq"; //Ethan
// const templateID = "template_zmu937j"; //Ethan



emailjs.init(publicKey);

btn.addEventListener("click", function(e) {

    e.preventDefault();
    btn.innterText = "Sending..."
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    const inputFields = {
        from_name: name.value,
        reply_to: email.value,
        message: message.value
    };

    emailjs.send(serviceKey, templateID, inputFields)
        .then(() => {
            console.log("btn works")
            btn.innerText = "Send";
            name.value = "";
            email.value = "";
            message.value = "";

        }, (error) => {
            console.log(error)
            btn.innterText = "Something went wrong"
        });
});