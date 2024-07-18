let a = document.getElementById("email");
    let b = document.getElementById("password");
    let c = document.getElementById("btn");

    let final = JSON.parse(localStorage.getItem("one"));
    c.addEventListener("click", abc);
    function abc(e) {
        e.preventDefault();
        let mail = a.value;
        let pas = b.value;
        if (final.email == mail && final.password == pas) {
            window.location.href = "index.html";
        }
        else {8
            alert("wrong data");
        }
    }