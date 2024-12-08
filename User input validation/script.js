document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;               /* variables*/ 
    const lastName = document.getElementById('lastName').value;
    const zipCode = document.getElementById('zipCode').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const namePattern = /^[A-Za-z]+$/;                                          /*conditional statement*/
    const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!namePattern.test(firstName)) {                  /*conditional statement*/
        alert('Please enter a valid first name.');          /* input from the user */
        return;
    }

    if (!namePattern.test(lastName)) {                  /*conditional statement*/
        alert('Please enter a valid last name.');       /* input from the user */
        return;
    }

    if (!zipPattern.test(zipCode)) {                    /*conditional statement*/
        alert('Please enter a valid ZIP code.');         /* input from the user */ 
        return;
    }

    if (!emailPattern.test(email)) {                    /*conditional statement*/
        alert('Please enter a valid email address.');    /* input from the user */ 
        return;
    }

    if (!passwordPattern.test(password)) {                  /*conditional statement*/
        alert('Password must be at least 8 characters long and contain both letters and numbers.');       
        return;
    }

    // Save user data to localStorage                           /* function */ 
    localStorage.setItem('user', JSON.stringify({ email, password, firstName, lastName, zipCode })); /*Data saved for processing and validation*/
    alert('Registration successful! You can now log in.');                  /* output to the user*/
});

document.getElementById('loginForm').addEventListener('submit', function(event) {           /* function */ 
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;                 /* input from the user*/
    const loginPassword = document.getElementById('loginPassword').value;           /* input from the user*/

    const storedUser = JSON.parse(localStorage.getItem('user'));                   /* function processing the stored data in comparison to the inputted data by the user  */

    if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {     /*conditional statement*/
        document.getElementById('hiddenMessage').style.display = 'block';                              /* output to the user if the credentials were correct*/
    } else {
        alert('Invalid login credentials. Please try again.')};                                         /* output to the user if the credentials were incorrect*/
    })