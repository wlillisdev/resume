function sendMail(contactForm) {

    emailjs.send("service_ondpwnm","rosie",{
        from_name: "sendername",
        to_name: "name",
        message: "project",
        from_email: "fromemail",
        });
    
        (
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
        return false;  // To block from loading a new page
    }
}