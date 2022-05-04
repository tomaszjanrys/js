window.onload = function()
                {
                    fetch("https://randomuser.me/api/")
                    //parsowanie danych
                    .then(response=> response.json())
                    .then(data=>dataReady(data))
                }
                function dataReady(data)
                        {
                            console.log(data);
                            var result = data.results[0]
                            var fullname = result.name.title + " "
                                        + result.name.first + " "
                                        + result.name.last;
                            document.getElementById("full-name").innerHTML =fullname;
                            var img = result.picture.large;
                            document.getElementById("avatar-src").src = img;

                            var username = result.login.username;
                            document.getElementById("user-name").innerHTML = "@"+username;

                            var userpass = result.login.password;
                            document.getElementById("user-pass").innerHTML = userpass;

                            var email = result.email;
                            document.getElementById("email").innerHTML = email;

                            var country = result.location.timezone.description;
                            document.getElementById("country").innerHTML = country;
                        }